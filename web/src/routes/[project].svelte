<script context="module">
  import groq from 'groq'

  import { overlayDrafts } from '../overlayDrafts'
  import sanity from '../sanity'

  export async function load({ page }) {
    const { project } = page.params

    const query = groq`
      *[_type == 'project' && slug.current == '${project}'] {
        _id,
        client,
        name,
        summary,
        page[] {
          _type,
          columns,
          heading,
          showHeading,
          gap,
          embed {
            embedHtml
          },
          images[] {
            _key,
            _type,
            asset -> {
              metadata {
                dimensions {
                  aspectRatio,
                  height,
                  width
                },
                mimeType
              },
              url
            },
          },
          slides[] {
            _key,
            _type,
            asset -> {
              metadata {
                dimensions {
                  aspectRatio,
                  height,
                  width
                },
                mimeType
              },
              url
            }
          },
          posts[],
          sources[],
          video,
          videos[] {
            _type,
            caption,
            heading,
            video
          }
        }
      }
    `

    const data = await sanity.fetch(query)

    return {
      props: {
        project: overlayDrafts(data)[0],
      },
    }
  }
</script>

<script>
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import unorphan from 'unorphan'

  import {
    Carousel,
    Gallery,
    Grid,
    GridItem,
    Heading2,
    Heading3,
    Heading4,
    Recognition,
    SocialMedia,
    StackedLogo,
    Text,
    Video,
  } from '../components'

  export let project = {
    page: [],
  }

  console.log(project)

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')
  })
</script>

<slot />

<main>
  <Grid>
    <GridItem colStart={1} colSpan={3}>
      <StackedLogo on:click={() => goto('/')} />
    </GridItem>

    <GridItem center colStart={5} colSpan={6}>
      <Heading2>{project.name}</Heading2>

      {#if project.client}
        <Heading4>{project.client}</Heading4>
      {/if}

      {#if project.summary}
        <Text blocks={project.summary} />
      {/if}

      {#each project.page as block}
        {#if block.heading && block.showHeading !== false}
          <Heading3>{block.heading}</Heading3>
        {/if}

        {#if block._type === 'carousel'}
          <Carousel data={block.slides} />
        {/if}

        {#if block._type === 'gallery'}
          <Gallery
            columns={block.columns}
            gap={block.gap}
            data={block.images}
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
          />
        {/if}
      {/each}
    </GridItem>
  </Grid>
</main>

<style>
  main {
    --space-Heading2: var(--space-4);
    --space-Heading3: var(--space-4);
    --space-Heading4: var(--space-4);

    --space-Gallery: var(--space-10);
    --space-Text: var(--space-10);
    --space-Video: var(--space-10);
  }
</style>
