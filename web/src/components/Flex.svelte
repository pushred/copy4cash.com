<script>
  import { getResponsivePropValues, onBreakpointChange } from '../theme.js'

  export let alignItems = undefined
  export let flexDirection = undefined
  export let gap = undefined
  export let inset = undefined
  export let justifyContent = undefined
  export let position = undefined

  let props = {
    alignItems,
    flexDirection,
    gap,
    position,
    justifyContent,
    inset,
  }

  $: {
    onBreakpointChange((breakpoint) => {
      props = getResponsivePropValues(breakpoint, {
        alignItems,
        flexDirection,
        gap,
        position,
        justifyContent,
        inset,
      })
    })
  }
</script>

<div
  class:absolute={props.position === 'absolute'}
  class:flex-direction-column={props.flexDirection === 'column'}
  class:inset-0={props.inset === '0'}
  class:items-center={props.alignItems === 'center'}
  class:justify-center={props.justifyContent === 'center'}
  class:justify-space-between={props.justifyContent === 'space-between'}
  class:gap-2={props.gap === '2'}
  class:gap-3={props.gap === '3'}
  class:gap-4={props.gap === '4'}
  class:gap-5={props.gap === '5'}
  class:gap-6={props.gap === '6'}
  class:gap-7={props.gap === '7'}
  class:gap-8={props.gap === '8'}
  class:gap-9={props.gap === '9'}
  class:gap-10={props.gap === '10'}
>
  <slot />
</div>

<style>
  div {
    display: flex;
    width: var(--width);
    margin-bottom: var(--space-bottom);
    gap: var(--gap);
    align-items: var(--align-items);
    justify-content: var(--justify-content);
  }

  .absolute {
    position: absolute;
  }

  .flex-direction-column {
    flex-direction: column;
  }

  .inset-0 {
    inset: 0;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-space-between {
    justify-content: space-between;
  }

  .gap-2 {
    gap: var(--space-2);
  }

  .gap-3 {
    gap: var(--space-3);
  }

  .gap-4 {
    gap: var(--space-4);
  }

  .gap-5 {
    gap: var(--space-5);
  }

  .gap-6 {
    gap: var(--space-6);
  }

  .gap-7 {
    gap: var(--space-7);
  }

  .gap-8 {
    gap: var(--space-8);
  }

  .gap-9 {
    gap: var(--space-9);
  }

  .gap-10 {
    gap: var(--space-10);
  }
</style>
