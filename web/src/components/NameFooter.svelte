<script>
  import Coin from './icons/small/Coin.svelte'
  import { onBreakpointChange } from '../theme.js'

  export let goto = undefined

  function handleClick() {
    goto('/hire')
  }

  let sm = false
  let md = false
  let lg = false
  let xl = false

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md =
      breakpoint?.key === 'md' ||
      breakpoint?.key === 'lg' ||
      breakpoint?.key === 'xl'
  })
</script>

<div class="layout" class:sm class:md on:click={handleClick}>
  {#if sm}
    <Coin />
    <span>Diana Casthart</span>
    <span>Freelance Copywriter</span>
    <span>Professional Smartass</span>
  {:else}
    <div class="name">
      <span>Diana Casthart</span>
      <Coin />
      <span>Freelance Copywriter</span>
    </div>
    <span>Professional Smartass</span>
  {/if}
</div>

<style>
  .layout {
    cursor: default;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: center;
    font-family: var(--ui-font);
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-1);
    color: var(--blended-gold);
    user-select: none;
    text-transform: uppercase;
  }

  .layout.md {
    justify-content: flex-end;
  }

  .layout.md .name {
    display: flex;
    gap: var(--space-2);
  }

  .layout.sm span {
    display: block;
  }

  .layout.md span {
    padding-top: 1px;
  }

  span {
    /* Diana is not content with Tobias Frere-Jones */
    word-spacing: 0.2em;
  }
</style>
