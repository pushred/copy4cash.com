<script context="module">
  import groq from 'groq'
  import { onMount } from 'svelte'
  import unorphan from 'unorphan'

  import { overlayDrafts } from '../overlayDrafts'
  import { getSanityClient } from '../sanity'
  import { isLoading } from '../stores.js'

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

    return {
      props: {
        data: overlayDrafts(await sanity.fetch(query))[0],
      },
    }
  }
</script>

<script>
  export let data

  import {
    Button,
    Flex,
    Heading2,
    Heading3,
    Heading4,
    Image,
    Link,
    Grid,
    GridItem,
    Paragraph,
    Section,
    Text,
  } from '../components'

  isLoading.set(true)

  let resumeUrl = data.resume?.asset?.url
  if (resumeUrl) resumeUrl = `${resumeUrl}?dl=Diana-Casthart-Resume.pdf`

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')
    isLoading.set(false)
  })
</script>

<svelte:head>
  <title>Hire : Copy4Ca$h</title>
</svelte:head>

<Heading4>Diana Casthart is</Heading4>
<Heading2>{data.status}</Heading2>
{#if data.details}<Heading4>{data.details}</Heading4>{/if}

<Text blocks={data.intro} />

<Flex gap="4" --space-bottom="0">
  {#if data.resume.asset}
    <Button
      download
      icon="down"
      label="Download Resume"
      url={resumeUrl}
      variant="raised-text"
      --space-bottom="var(--space-10)"
    />
  {/if}
  <Button
    icon="email"
    label="Email"
    url="mailto:diana@copy4cash.com"
    variant="raised-text"
    --space-bottom="var(--space-10)"
  />
</Flex>

<Section>
  <Heading3>Follow</Heading3>
  <Button
    icon="linkedin"
    label="LinkedIn"
    url="https://www.linkedin.com/in/diana-casthart-b7815041/"
    variant="raised-text"
    --space-bottom="var(--space-3)"
  />
  <br />
  <Button
    icon="working-not-working"
    label="Working Not Working"
    url="https://workingnotworking.com/75263-diana"
    variant="raised-text"
    --space-bottom="0"
  />
</Section>

<Section>
  {#if data.photo}
    <Grid cols={6} --space-bottom="var(--space-8)">
      <GridItem colStart={3} colSpan={2}>
        <Image document={data.photo} />
      </GridItem>
    </Grid>
  {/if}
  {#if data.obsessions}<Paragraph>{data.obsessions}</Paragraph>{/if}
</Section>

<Section>
  <Heading3>Need an AD?</Heading3>
  <Paragraph>S/O to these Art Directors:</Paragraph>
  {#each data.artDirectors as artDirector}
    <Link to={artDirector.url}>{artDirector.name}</Link><br />
  {/each}
</Section>
