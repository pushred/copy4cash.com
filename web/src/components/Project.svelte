<script>
  import { afterUpdate, getContext } from 'svelte'
  import unorphan from 'unorphan'

  import {
    AudioPlayer,
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

    let result = text.toUpperCase()

    stylizedTextExclusions.forEach((stylizedText) => {
      result = result.replace(new RegExp(stylizedText, 'i'), stylizedText)
    })

    return result
  }

  function styleHeadings(blocks = []) {
    return blocks.map((block) => {
      block.heading = smartUppercase(block.heading)

      const parts = /(.*)(\s\(.*\))(.*)/.exec(block.heading)
      if (parts === null) return block

      // uppercase with JS so that was can make exceptions
      block.heading = parts[1] + parts[3]
      block.subheading = parts[2].trim()

      return block
    })
  }

  afterUpdate(() => {
    if (Array.isArray(data.page)) data.page = styleHeadings(data.page)
    unorphan('p, h1, h2, h3, h4')
    isLoading.set(false)
  })
</script>

<Heading2>{data.name}</Heading2>

{#if data.client}
  <Heading4>{data.client}</Heading4>
{/if}

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
      <Gallery columns={block.columns} gap={block.gap} data={block.images} />
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
      <Gallery columns={block.columns} gap={block.gap} data={block.videos} />
    {/if}
  {/each}
{/if}
