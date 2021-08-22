<script>
  import { onBreakpointChange } from '../theme.js'
  import StackedLogo from './StackedLogo.svelte'

  let isLarge = false

  onBreakpointChange((breakpoint) => {
    isLarge = breakpoint?.key === 'lg'
  })

  export let gotoHome
</script>

<nav class:is-large={isLarge}>
  <StackedLogo on:click={gotoHome} />
  {#if isLarge}
    <div class="sub-nav">
      <slot name="sub-nav" />
    </div>
    <div class="site-nav">
      <slot name="site-nav" />
    </div>
  {/if}
</nav>

{#if isLarge}
  <svg
    width="363"
    height="2054"
    viewBox="0 0 363 2054"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 2054.78L361 0H0V2054.78Z"
      fill="#6A0BFF"
      fill-opacity="0.1"
      stroke="#6A0BFF"
      stroke-opacity="0.25"
      stroke-width="2"
    />
  </svg>
{/if}

<style>
  nav.is-large {
    position: sticky;
    top: var(--space-page-margin-y);
    bottom: var(--space-page-margin-y);
    left: var(--space-page-margin-x);
  }

  nav.is-large .site-nav {
    position: fixed;
    bottom: var(--space-page-margin-y);
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .sub-nav {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-5);
    padding: 0 11%;
  }

  svg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
  }
</style>
