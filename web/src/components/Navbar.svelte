<script>
  import Flex from './Flex.svelte'

  import { onBreakpointChange } from '../theme.js'
  import StackedLogo from './logos/StackedLogo.svelte'

  let sm = false
  let md = false
  let lg = false

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
    lg = breakpoint?.key === 'lg' || breakpoint?.key === 'xl'
  })

  export let gotoHome
</script>

<nav class:sm class:md class:lg>
  {#if lg}
    <StackedLogo on:click={gotoHome} />
  {/if}
  <Flex
    bottom={[undefined, undefined, 'margin-y', 'margin-y']}
    flexDirection={['row', 'row', 'column', 'column']}
    gap="5"
    justifyContent="space-between"
    marginBottom="0"
    paddingX={['margin-x', 'margin-x']}
    position={['static', 'static', 'fixed', 'fixed']}
  >
    <slot />
  </Flex>
</nav>

{#if lg}
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
  nav.lg {
    position: sticky;
    top: var(--space-margin-y);
    bottom: var(--space-margin-y);
    left: var(--space-margin-x);
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
