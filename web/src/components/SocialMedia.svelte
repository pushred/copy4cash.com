<script>
  import { tick } from 'svelte'

  import AppIcon from './AppIcon.svelte'
  import Modal from './Modal.svelte'

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
  {#if instagrams.length}
    <AppIcon icon="instagram" on:click={() => view('instagram')} />
  {/if}
  {#if tweets.length}
    <AppIcon icon="twitter" on:click={() => view('twitter')} />
  {/if}
</nav>

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

<style>
  nav {
    display: inline-flex;
    margin-bottom: var(--space-bottom);
    gap: var(--space-4);
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
