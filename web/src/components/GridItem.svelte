<script>
  import { getResponsivePropValues, onBreakpointChange } from '../theme.js'

  export let center = false

  export let alignSelf = undefined
  export let colStart = 1
  export let colSpan = 1
  export let justifySelf = undefined
  export let rowStart = undefined
  export let textAlign = undefined

  let props = {
    alignSelf,
    colStart,
    colSpan,
    justifySelf,
    rowStart,
    textAlign,
  }

  $: {
    onBreakpointChange((breakpoint) => {
      props = getResponsivePropValues(breakpoint, {
        alignSelf,
        colStart,
        colSpan,
        justifySelf,
        rowStart,
        textAlign,
      })
    })
  }
</script>

<div
  class:center
  class:align-self-center={props.alignSelf === 'center'}
  class:align-self-end={props.alignSelf === 'end'}
  class:align-self-left={props.alignSelf === 'left'}
  class:align-self-right={props.alignSelf === 'right'}
  class:col-start-auto={props.colStart === 'auto'}
  class:col-start-1={props.colStart === 1}
  class:col-start-2={props.colStart === 2}
  class:col-start-3={props.colStart === 3}
  class:col-start-4={props.colStart === 4}
  class:col-start-5={props.colStart === 5}
  class:col-start-6={props.colStart === 6}
  class:col-start-7={props.colStart === 7}
  class:col-start-8={props.colStart === 8}
  class:col-start-9={props.colStart === 9}
  class:col-start-10={props.colStart === 10}
  class:col-start-11={props.colStart === 11}
  class:col-start-12={props.colStart === 12}
  class:col-span-1={props.colSpan === 1}
  class:col-span-2={props.colSpan === 2}
  class:col-span-3={props.colSpan === 3}
  class:col-span-4={props.colSpan === 4}
  class:col-span-5={props.colSpan === 5}
  class:col-span-6={props.colSpan === 6}
  class:col-span-7={props.colSpan === 7}
  class:col-span-8={props.colSpan === 8}
  class:col-span-9={props.colSpan === 9}
  class:col-span-10={props.colSpan === 10}
  class:col-span-11={props.colSpan === 11}
  class:col-span-12={props.colSpan === 12}
  class:row-start-1={props.rowStart === 1}
  class:row-start-2={props.rowStart === 2}
  class:justify-self-center={props.justifySelf === 'center'}
  class:justify-self-left={props.justifySelf === 'left'}
  class:justify-self-right={props.justifySelf === 'right'}
  class:text-align-center={props.textAlign === 'center'}
  class:text-align-left={props.textAlign === 'left'}
  class:text-align-right={props.textAlign === 'right'}
>
  <slot />
</div>

<style>
  .align-self-center {
    align-self: center;
  }

  .align-self-end {
    align-self: end;
  }

  .align-self-left {
    align-self: left;
  }

  .align-self-right {
    align-self: right;
  }

  .justify-self-center {
    align-self: center;
  }

  .justify-self-left {
    justify-self: left;
  }

  .justify-self-right {
    justify-self: right;
  }

  .col-start-auto {
    grid-column-start: auto;
  }

  .col-start-1 {
    grid-column-start: 1;
  }

  .col-start-2 {
    grid-column-start: 2;
  }

  .col-start-3 {
    grid-column-start: 3;
  }

  .col-start-4 {
    grid-column-start: 4;
  }

  .col-start-5 {
    grid-column-start: 5;
  }

  .col-start-6 {
    grid-column-start: 6;
  }

  .col-start-7 {
    grid-column-start: 7;
  }

  .col-start-8 {
    grid-column-start: 8;
  }

  .col-start-9 {
    grid-column-start: 9;
  }

  .col-start-10 {
    grid-column-start: 10;
  }

  .col-start-11 {
    grid-column-start: 11;
  }

  .col-start-12 {
    grid-column-start: 12;
  }

  .col-span-1 {
    grid-column-end: span 1;
  }

  .col-span-2 {
    grid-column-end: span 2;
  }

  .col-span-3 {
    grid-column-end: span 3;
  }

  .col-span-4 {
    grid-column-end: span 4;
  }

  .col-span-5 {
    grid-column-end: span 5;
  }

  .col-span-6 {
    grid-column-end: span 6;
  }

  .col-span-7 {
    grid-column-end: span 7;
  }

  .col-span-8 {
    grid-column-end: span 8;
  }

  .col-span-9 {
    grid-column-end: span 9;
  }

  .col-span-10 {
    grid-column-end: span 10;
  }

  .col-span-11 {
    grid-column-end: span 11;
  }

  .col-span-12 {
    grid-column-end: span 12;
  }

  .row-start-1 {
    grid-row-start: 1;
  }

  .row-start-2 {
    grid-row-start: 2;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-left {
    text-align: left;
  }

  .text-align-right {
    text-align: right;
  }
</style>
