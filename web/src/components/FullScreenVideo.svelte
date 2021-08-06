<script>
  export let backdrop = true
  export let vimeoId = undefined
</script>

{#if backdrop}
  <div class={$$props.class} class:backdrop>
    {#if vimeoId}
      <iframe
        title="Video"
        src="https://player.vimeo.com/video/{vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0"
      />
    {/if}
  </div>
{:else if vimeoId}
  <iframe
    class={$$props.class}
    title="Video"
    src="https://player.vimeo.com/video/{vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0"
  />
{/if}

<style>
  div {
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
    background: var(--black);
  }

  div,
  div:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .backdrop:before {
    opacity: 0.85;
    content: '';
    background-color: #0e0024;
    z-index: 1;
  }

  /* from https://codepen.io/abennington/pen/ZONqqv */

  iframe {
    width: 100vw;
    height: 56.25vw; /* given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
