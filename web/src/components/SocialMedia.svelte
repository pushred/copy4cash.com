<script>
  import { tick } from 'svelte'

  import Button from './Button.svelte'
  import Flex from './Flex.svelte'
  import Modal from './Modal.svelte'
  import Tweet from './Tweet.svelte'

  export let data = []

  const instagrams = data.filter((post) => post._type === 'instagram')
  const tweets = data.filter((post) => post._type === 'tweet')

  let posts = null

  async function view(type) {
    if (type === 'instagram') posts = instagrams
    if (type === 'twitter') posts = tweets

    await tick()

    if (
      type === 'instagram' &&
      typeof instgrm?.Embeds?.process === 'function'
    ) {
      instgrm.Embeds.process()
    }

    if (type === 'twitter' && typeof twttr?.widgets?.load === 'function') {
      twttr.widgets.load()
    }
  }

  function handleClose() {
    posts = null
  }
</script>

<svelte:head>
  <script async src="https://platform.twitter.com/widgets.js"></script>
  <script async src="https://www.instagram.com/embed.js"></script>
</svelte:head>

<nav>
  {#if tweets.length}
    <Tweet html={tweets[0].embed.quoteHtml} />
  {/if}
  <Flex gap="5" --space-bottom="0">
    {#if instagrams.length}
      <Button
        --space-bottom="0"
        variant="raised-text"
        icon="instagram"
        label="Instagram"
        on:click={() => view('instagram')}
      />
    {/if}
    {#if tweets.length}
      <Button
        --space-bottom="0"
        variant="raised-text"
        icon="twitter"
        label="Tweets"
        on:click={() => view('twitter')}
      />
    {/if}
  </Flex>
</nav>

{#if Array.isArray(posts)}
  <Modal isOpen={posts !== null} onClose={handleClose}>
    {#if posts}
      <div class="viewer">
        {#each posts as post}
          <!-- div wrapper works around https://github.com/sveltejs/svelte/issues/6037 -->
          <div class="wrapper">
            {@html post.embed.embedHtml}
          </div>
        {/each}
      </div>
    {/if}
  </Modal>
{/if}

<style>
  nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: var(--space-bottom);
    gap: var(--space-5);
  }

  .viewer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: var(--space-5);
    margin: var(--space-10);
  }

  .wrapper {
    width: 520px;
  }

  :global(.twitter-tweet) {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
</style>
