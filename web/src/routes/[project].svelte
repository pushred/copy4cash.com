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
          heading,
          embed {
            embedHtml
          },
          images[] {
            asset -> { url }
          },
          video
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
  import {
    Gallery,
    Grid,
    GridItem,
    Heading2,
    Heading3,
    Heading4,
    Text,
    Video,
  } from '../components'

  export let project
</script>

<slot />

<main>
  <Grid>
    <GridItem center colStart={5} colSpan={6}>
      <Heading2>{project.name}</Heading2>

      {#if project.client}
        <Heading4>{project.client}</Heading4>
      {/if}

      {#if project.summary}
        <Text blocks={project.summary} />
      {/if}

      {#each project.page as block}
        {#if block.heading}
          <Heading3>{block.heading}</Heading3>
        {/if}

        {#if block.images}
          <Gallery
            data={block.images.map((image) => ({
              image: {
                description: 'Image',
                url: image.asset?.url,
              },
            }))}
          />
        {/if}

        {#if block.video}
          <Video
            vimeoId={block.video.vimeoId}
            width="100%"
            originalWidth={block.video.width}
            originalHeight={block.video.height}
          />
        {/if}

        {#if block.embed}
          {@html block.embed.embedHtml}
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