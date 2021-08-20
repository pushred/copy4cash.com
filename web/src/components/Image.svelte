<script>
  import imageUrlBuilder from '@sanity/image-url'
  import { getContext, onMount } from 'svelte'

  import Placeholder from './Placeholder.svelte'

  import sanity from '../sanity'

  export let caption
  export let document = {}

  const asset = document.asset || {}
  const metadata = asset.metadata || {}
  const originalFormat = document.mimeType
  const urlBuilder = imageUrlBuilder(sanity)

  const aspectRatio = metadata.dimensions?.aspectRatio
  const originalWidth = metadata.dimensions?.width

  let container
  let hasIntersected = false
  let initialWidth
  let initialHeight
  let sources = {}
  let url

  const context = getContext('page')

  // limit possible sizes to leverage caching; increments of 128 → 256
  const widthMultiples = [256, 512, 640, 768, 896, 1024, 1280, 1536, 1792, 2048]

  function getSanityUrl(document) {
    return urlBuilder.image(document)
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

  onMount(() => {
    // adapted from https://css-tricks.com/lazy-loading-images-in-svelte/
    // TODO: https://caniuse.com/loading-lazy-attr — someday

    const { width, height } = container.getBoundingClientRect()

    initialWidth = Math.round(width)
    initialHeight = Math.round(initialWidth / aspectRatio)
    sources = getSources()

    if (typeof IntersectionObserver === 'undefined') {
      hasIntersected = true
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasIntersected = true
          observer.unobserve(container)
        }
      },
      {
        root: context.getCarouselEl() || window,
        rootMargin: '0px 0px 0px 0px',
      }
    )

    observer.observe(container)

    return () => observer.unobserve(container)
  })
</script>

<div bind:this={container}>
  {#if hasIntersected}
    <picture>
      <source
        type="image/webp"
        srcset={sources.srcset?.webP}
        sizes={sources.sizes}
      />
      <source
        type={originalFormat}
        srcset={sources.srcset?.originalFormat}
        sizes={sources.sizes}
      />
      <img
        src={url}
        alt={caption}
        width={initialWidth}
        height={initialHeight}
      />
    </picture>
  {:else}
    <Placeholder width={initialWidth} height={initialHeight} />
  {/if}
</div>
