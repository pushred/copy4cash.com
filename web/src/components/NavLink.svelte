<script>
  import Hire from './icons/nav/Hire.svelte'
  import Instagram from './icons/nav/Instagram.svelte'
  import Twitter from './icons/nav/Twitter.svelte'
  import Work from './icons/nav/Work.svelte'

  export let hover = false
  export let goto = undefined
  export let icon
  export let label = 'Label'
  export let url = '#'

  function handleLeave() {
    hover = false
  }

  function handleEnter() {
    hover = true
  }

  function handleClick(event) {
    if (typeof goto === 'function' && url) {
      event.preventDefault()
      goto(url)
    }
  }
</script>

<a
  href={url}
  target={url.startsWith('http') ? '_blank' : undefined}
  on:click={handleClick}
  on:blur={handleLeave}
  on:focus={handleEnter}
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
>
  {#if icon === 'hire'}
    <Hire {hover} />
  {:else if icon === 'instagram'}
    <Instagram {hover} />
  {:else if icon === 'twitter'}
    <Twitter {hover} />
  {:else if icon === 'work'}
    <Work {hover} />
  {/if}
  <span class="label">{label}</span>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 4rem;
    height: 4rem;
    text-align: center;
  }

  .label {
    font-family: var(--ui-font);
    font-size: var(--text-0);
    font-weight: 400;
    color: var(--blended-gold);
    text-transform: uppercase;
    line-height: 1.2;
  }
</style>
