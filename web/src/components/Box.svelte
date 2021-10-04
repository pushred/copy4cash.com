<script>
  import { getResponsivePropValues, onBreakpointChange } from '../theme.js'

  export let alignItems = undefined
  export let bottom = undefined
  export let cols = undefined
  export let display = undefined
  export let flexDirection = undefined
  export let id = undefined
  export let gap = undefined
  export let inset = undefined
  export let justifyContent = undefined
  export let marginBottom = undefined
  export let minHeight = undefined
  export let paddingX = undefined
  export let position = undefined
  export let width = undefined
  export let wrap = undefined

  let props = {}

  $: {
    onBreakpointChange((breakpoint) => {
      props = getResponsivePropValues(breakpoint, {
        alignItems,
        bottom,
        cols,
        display,
        flexDirection,
        id,
        gap,
        inset,
        justifyContent,
        marginBottom,
        minHeight,
        paddingX,
        position,
        width,
        wrap,
      })
    })
  }
</script>

<div
  class:bottom-margin-y={props.bottom === 'margin-y'}
  class:cols-1={props.cols === 1}
  class:cols-2={props.cols === 2}
  class:cols-6={props.cols === 6}
  class:cols-12={props.cols === 12}
  class:display-flex={props.display === 'flex'}
  class:display-grid={props.display === 'grid'}
  class:flex-direction-column={props.flexDirection === 'column'}
  class:flex-wrap={props.wrap === true}
  class:gap-2={props.gap === '2'}
  class:gap-3={props.gap === '3'}
  class:gap-4={props.gap === '4'}
  class:gap-5={props.gap === '5'}
  class:gap-6={props.gap === '6'}
  class:gap-7={props.gap === '7'}
  class:gap-8={props.gap === '8'}
  class:gap-9={props.gap === '9'}
  class:gap-10={props.gap === '10'}
  class:inset-0={props.inset === '0'}
  class:items-center={props.alignItems === 'center'}
  class:justify-center={props.justifyContent === 'center'}
  class:justify-space-between={props.justifyContent === 'space-between'}
  class:margin-bottom-0={props.marginBottom === '0'}
  class:margin-bottom={props.marginBottom === true}
  class:min-height-full={props.minHeight === 'full'}
  class:padding-x-margin-x={props.paddingX === 'margin-x'}
  class:position-absolute={props.position === 'absolute'}
  class:position-fixed={props.position === 'fixed'}
  class:width-100={props.width === '100%'}
>
  <slot />
</div>

<style>
  div {
    width: var(--width);
    margin-bottom: var(--space-bottom);
    gap: var(--gap);
    align-items: var(--align-items);
    justify-content: var(--justify-content);
  }

  .bottom-margin-y {
    bottom: var(--space-margin-y);
  }

  .cols-1 {
    display: block;
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

  .display-flex {
    display: flex;
  }

  .display-grid {
    display: grid;
    grid-gap: var(--space-grid-gap);
  }

  .flex-direction-column {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
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

  .margin-bottom {
    margin-bottom: var(--space-bottom);
  }

  .margin-bottom-0 {
    margin-bottom: 0;
  }

  .min-height-full {
    min-height: calc(100vh - calc(var(--space-margin-y) * 2));
  }

  .padding-x-margin-x {
    padding-right: var(--space-margin-x);
    padding-left: var(--space-margin-x);
  }

  .position-absolute {
    position: absolute;
  }

  .position-fixed {
    position: fixed;
  }

  .width-100 {
    width: 100%;
  }
</style>
