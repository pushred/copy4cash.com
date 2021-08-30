<script>
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

  export let data = {}
</script>

<Heading2>{data.name}</Heading2>

{#if data.client}
  <Heading4>{data.client}</Heading4>
{/if}

{#if data.summary}
  <Text blocks={data.summary} />
{/if}

{#each data.page || [] as block}
  {#if block.heading && block.showHeading !== false}
    <Heading3>{block.heading}</Heading3>
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
