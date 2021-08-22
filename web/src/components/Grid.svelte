<script>
  import { onBreakpointChange, getResponsivePropValues } from '../theme.js'

  export let cols = 12

  let props = {}

  $: {
    onBreakpointChange((breakpoint) => {
      props = getResponsivePropValues(breakpoint, { cols })
    })
  }
</script>

<div
  class="grid"
  class:cols-2={props.cols === 2}
  class:cols-6={props.cols === 6}
  class:cols-12={props.cols === 12}
>
  <slot />
</div>

<style>
  .grid {
    width: 100%;
    display: grid;
    grid-gap: var(--space-grid-gap);
  }

  .cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .cols-6 {
    grid-template-columns: repeat(6, 1fr);
  }

  .cols-12 {
    grid-template-columns: repeat(12, 1fr);
  }
</style>
