<script>
  import Hire from './icons/nav/Hire.svelte'
  import Work from './icons/nav/Work.svelte'

  export let hover = false
  export let goto
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
    event.preventDefault()
    if (typeof goto === 'function') goto(url)
  }
</script>

<a
  href={url}
  on:click={handleClick}
  on:blur={handleLeave}
  on:focus={handleEnter}
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
>
  {#if icon === 'hire'}
    <Hire {hover} />
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
    font-size: var(--text-1);
    color: var(--gold);
    line-height: 1.2;
  }
</style>
