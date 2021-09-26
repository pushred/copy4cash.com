<script context="module">
  import groq from 'groq'
  import imageUrlBuilder from '@sanity/image-url'
  import { onMount } from 'svelte'
  import unorphan from 'unorphan'

  import { overlayDrafts } from '../overlayDrafts'
  import { getSanityClient } from '../sanity'
  import { isLoading } from '../stores.js'
  import { onBreakpointChange } from '../theme.js'

  export async function load({ page }) {
    const query = groq`
      *[_type == 'hire'] {
        status,
        details,
        intro,
        obsessions,
        photo {
          asset -> {
            metadata {
              dimensions {
                aspectRatio,
                height,
                width
              }
            },
            mimeType,
            url
          }
        },
        resume {
          asset -> {
            url
          }
        },
        artDirectors[] {
          name,
          url
        }
      }
    `

    const sanity = getSanityClient(page.host)
    const content = overlayDrafts(await sanity.fetch(query))[0]
    const urlBuilder = imageUrlBuilder(sanity)

    const hasIntro =
      Array.isArray(content.intro) &&
      content.intro.length &&
      Array.isArray(content.intro[0].children)

    return {
      props: {
        data: content,
        metadata: {
          description: hasIntro
            ? content.intro[0].children.map((child) => child.text).join('')
            : undefined,
          imageUrl: content.photo
            ? urlBuilder.image(content.photo).url()
            : undefined,
        },
      },
    }
  }
</script>

<script>
  export let data
  export let metadata = {}

  import {
    Button,
    Flex,
    Heading3,
    Image,
    Link,
    Grid,
    GridItem,
    Modal,
    Panel,
    Paragraph,
    Text,
  } from '../components'

  function toggleModal() {
    isModalOpen = !isModalOpen
  }

  isLoading.set(true)

  let isModalOpen = false

  let lg = false
  let xl = false

  let resumeUrl = data.resume?.asset?.url
  if (resumeUrl) resumeUrl = `${resumeUrl}?dl=Diana-Casthart-Resume.pdf`

  onBreakpointChange((breakpoint) => {
    lg = breakpoint?.key === 'lg'
    xl = breakpoint?.key === 'xl'
  })

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')
    isLoading.set(false)
  })
</script>

<svelte:head>
  <title>Hire Diana Casthart : Copy4Ca$h</title>
  <meta name="og:title" content="Hire Diana Casthart" />
  <meta name="description" content={metadata.description} />
  <meta name="og:image" content={metadata.imageUrl} />
</svelte:head>

<div class:lg class:xl>
  <Grid cols={3}>
    <GridItem colSpan={3}>
      <strong class="status-intro">Diana Casthart is</strong>
      <strong class="status">{data.status}</strong>
      {#if data.details}
        <strong class="status-details">{data.details}</strong>
      {/if}
    </GridItem>
    <GridItem colSpan={[1, 1, 1, 1]} colStart={[2, 1, 1, 1]} rowStart={2}>
      {#if data.photo}
        <Image document={data.photo} />
      {/if}
    </GridItem>
    <GridItem
      rowStart={[3, 2, 2, 2]}
      colStart={[1, 2, 2, 2]}
      colSpan={[3, 2, 2, 2]}
    >
      <Text align={['center', 'left', 'left', 'left']} blocks={data.intro} />
    </GridItem>
    <GridItem colSpan={3}>
      <Panel --space-bottom="var(--space-5)">
        <Flex
          justifyContent="center"
          wrap
          gap="4"
          --space-bottom="0"
          --width="100%"
        >
          {#if data.resume.asset}
            <Button
              download
              icon="down"
              label="Download Resume"
              url={resumeUrl}
              variant="raised-text"
              --space-bottom="0"
            />
          {/if}
          <Button
            icon="email"
            label="Email"
            url="mailto:diana@copy4cash.com"
            variant="raised-text"
            --space-bottom="0"
          />
          <Button
            icon="linkedin"
            label="LinkedIn"
            url="https://www.linkedin.com/in/diana-casthart-b7815041/"
            variant="raised-text"
            --space-bottom="0"
          />
          <Button
            icon="working-not-working"
            label="Working Not Working"
            url="https://workingnotworking.com/75263-diana"
            variant="raised-text"
            --space-bottom="0"
          />
        </Flex>
      </Panel>

      {#if data.obsessions}
        <Paragraph --text-color="var(--light-purple)" size={1}>
          {data.obsessions}
        </Paragraph>
      {/if}
    </GridItem>
  </Grid>

  <div class="prompt-ad">
    <Button
      variant="raised-text"
      icon="right"
      label="Need an AD?"
      on:click={toggleModal}
    />
  </div>
</div>

<Modal isOpen={isModalOpen} onClose={toggleModal}>
  <div class="ad">
    <Heading3>Need an AD?</Heading3>
    <Paragraph>S/O to these Art Directors:</Paragraph>
    {#each data.artDirectors as artDirector}
      <Link to={artDirector.url}>{artDirector.name}</Link><br />
    {/each}
  </div>
</Modal>

<style>
  .status-intro,
  .status-details {
    display: block;
    font-family: var(--ui-font);
    font-size: var(--text-1);
    line-height: 1.25;
    color: var(--gold);
  }

  .status {
    display: block;
    padding: var(--space-4) 0;
    font-family: var(--heading-font);
    font-weight: 700;
    font-size: var(--text-6);
    line-height: 1;
    color: var(--neon-green);
    text-transform: uppercase;
  }

  .xl .status {
    font-size: var(--text-8);
  }

  .lg .prompt-ad,
  .xl .prompt-ad {
    position: fixed;
    top: var(--space-page-margin-y);
    right: var(--space-page-margin-y);
  }

  .ad {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    inset: 0;
    background-color: var(--purple-black);
  }
</style>
