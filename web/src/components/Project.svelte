<script>
  import { afterUpdate, getContext } from 'svelte'
  import unorphan from 'unorphan'

  import {
    AudioPlayer,
    Box,
    Carousel,
    Gallery,
    Heading2,
    Heading3,
    Heading4,
    Recognition,
    SocialMedia,
    Text,
    Video,
  } from '../components'

  import { isLoading } from '../stores.js'

  export let data = {}

  const context = getContext('site')

  function smartUppercase(text) {
    if (!text) return text

    const stylizedTextExclusions = context?.stylizedTextExclusions || []

    // uppercase with JS so that we can make exceptions
    let result = text.toUpperCase()

    stylizedTextExclusions.forEach((stylizedText) => {
      result = result.replace(new RegExp(stylizedText, 'i'), stylizedText)
    })

    return result
  }

  function styleHeadings(blocks = []) {
    return blocks.map((block) => {
      block.heading = smartUppercase(block.heading)

      const parenParts = /(.*)(\s\(.*\))(.*)/.exec(block.heading)
      const pipeParts = /(.*)\s\|\s(.*)/.exec(block.heading)

      if (parenParts) {
        block.heading = parenParts[1] + parenParts[3]
        block.subheading = parenParts[2].trim()
      }

      if (pipeParts) {
        block.heading = pipeParts[1]
        block.subheading = pipeParts[2].trim()
      }

      if (block.heading) {
        block.heading = block.heading.replace(/\sx\s/i, ' × ')
      }

      if (block.subheading) {
        block.subheading = block.subheading.replace(/\sx\s/i, ' × ')
      }

      return block
    })
  }

  afterUpdate(() => {
    if (Array.isArray(data.page)) data.page = styleHeadings(data.page)
    unorphan('p, h1, h2, h3, h4')
    isLoading.set(false)

    if (!window.location.hash) {
      document
        .getElementById(window.location.hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  })
</script>

<Box paddingX={['margin-x', 'margin-x']}>
  <Heading2>{data.name}</Heading2>

  {#if data.client}
    <Heading4>{data.client}</Heading4>
  {/if}
</Box>

{#if data.summary}
  <Text blocks={data.summary} />
{/if}

{#if Array.isArray(data.page)}
  {#each data.page as block}
    {#if block.heading && block.showHeading !== false}
      <Heading3 textTransform="none">
        {block.heading}
        {#if block.subheading}
          <span class="subheading">{block.subheading}</span>
        {/if}
      </Heading3>
    {/if}

    {#if block._type === 'audio'}
      <AudioPlayer caption={block.caption} url={block.file?.asset?.url} />
    {/if}

    {#if block._type === 'carousel'}
      <Carousel data={block.slides} />
    {/if}

    {#if block._type === 'gallery'}
      <Gallery
        columns={block.columns}
        gap={block.gap}
        data={block.images}
        spaceBottom={block.spaceBottom}
      />
    {/if}

    {#if block._type === 'recognition'}
      <Heading3>Recognition</Heading3>
      <Recognition data={block.sources} />
    {/if}

    {#if block._type === 'social-media'}
      <Heading3>What People Are Saying</Heading3>
      <SocialMedia data={block.posts} />
    {/if}

    {#if block._type === 'video'}
      <Video
        vimeoId={block.video.vimeoId}
        width="100%"
        originalWidth={block.video.width}
        originalHeight={block.video.height}
      />
    {/if}

    {#if block._type === 'video-carousel'}
      <Carousel data={block.videos} />
    {/if}

    {#if block._type === 'video-gallery'}
      <Gallery
        columns={block.columns}
        gap={block.gap}
        data={block.videos}
        spaceBottom={block.spaceBottom}
      />
    {/if}
  {/each}
{/if}
