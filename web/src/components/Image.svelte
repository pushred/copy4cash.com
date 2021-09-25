<script>
  import imageUrlBuilder from '@sanity/image-url'
  import { afterUpdate, getContext, onDestroy } from 'svelte'

  import Placeholder from './Placeholder.svelte'

  import { getSanityClient } from '../sanity.js'
  import { isModalOpen } from '../stores.js'

  export let document = {}

  const asset = document.image?.asset || {}
  const description = document.description
  const metadata = asset.metadata || {}
  const originalFormat = asset.mimeType
  const sanity = getSanityClient()
  const urlBuilder = imageUrlBuilder(sanity)

  const aspectRatio = metadata.dimensions?.aspectRatio
  const originalWidth = metadata.dimensions?.width
  const originalHeight = metadata.dimensions?.height

  let container
  let hasIntersected = false
  let initialWidth
  let initialHeight
  let isVertical
  let observer
  let sources = {}
  let url

  const context = getContext('site')

  // limit possible sizes to leverage caching; increments of 128 → 256
  const widthMultiples = [256, 512, 640, 768, 896, 1024, 1280, 1536, 1792, 2048]

  function getSanityUrl(document) {
    return urlBuilder.image(document.image)
  }

  function getSrcset(sizes, format) {
    return sizes
      .map((size) => {
        let sanityUrl = getSanityUrl(document)
          .width(size)
          .dpr(window.devicePixelRatio)
        if (format) sanityUrl = sanityUrl.format(format)
        return `${sanityUrl.url()} ${size}w`
      })
      .join(', ')
  }

  function getSources() {
    let sizes = widthMultiples.filter(
      (size) => size >= initialWidth && size < originalWidth
    )

    if (sizes.length === 0) sizes = [originalWidth]

    return {
      sizes: sizes.map((size) => `${size}px`).join(', '),
      srcset: {
        originalFormat: getSrcset(sizes),
        webP: getSrcset(sizes, 'webp'),
      },
    }
  }

  afterUpdate(() => {
    if (!container) return

    // adapted from https://css-tricks.com/lazy-loading-images-in-svelte/
    // TODO: https://caniuse.com/loading-lazy-attr — someday

    const { width } = container.getBoundingClientRect()

    initialWidth = Math.round(width)
    initialHeight = Math.round(initialWidth / aspectRatio)
    isVertical = originalHeight > originalWidth
    sources = getSources()

    if (typeof IntersectionObserver === 'undefined') {
      hasIntersected = true
      return
    }

    let root = undefined

    if (!$isModalOpen && typeof context?.getCarouselEl === 'function') {
      root = context?.getCarouselEl()
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasIntersected = true
          observer.unobserve(container)
        }
      },
      {
        root,
        rootMargin: '0px 0px 0px 0px',
      }
    )

    observer.observe(container)
  })

  onDestroy(() => {
    observer?.unobserve(container)
  })
</script>

<div bind:this={container}>
  {#if hasIntersected}
    <picture>
      {#if originalFormat !== 'image/gif'}
        <source
          type="image/webp"
          srcset={sources.srcset?.webP}
          sizes={sources.sizes}
        />
      {/if}
      <source
        type={originalFormat}
        srcset={sources.srcset?.originalFormat}
        sizes={sources.sizes}
      />
      <img
        class:is-vertical={isVertical}
        src={url}
        alt={description}
        width={initialWidth}
        height={initialHeight}
      />
    </picture>
  {:else}
    <Placeholder width={initialWidth} height={initialHeight} />
  {/if}
</div>

<style>
  img {
    width: 100%;
    max-width: var(--max-width);
    height: auto;
  }
</style>
