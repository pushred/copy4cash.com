<script>
  export let center = false

  export let colStart = 1
  export let colSpan = 1
</script>

<div
  class:center
  class:col-start-auto={colStart === 'auto'}
  class:col-start-1={colStart === 1}
  class:col-start-2={colStart === 2}
  class:col-start-3={colStart === 3}
  class:col-start-4={colStart === 4}
  class:col-start-5={colStart === 5}
  class:col-start-6={colStart === 6}
  class:col-start-7={colStart === 7}
  class:col-start-8={colStart === 8}
  class:col-start-9={colStart === 9}
  class:col-start-10={colStart === 10}
  class:col-start-11={colStart === 11}
  class:col-start-12={colStart === 12}
  class:col-span-1={colSpan === 1}
  class:col-span-2={colSpan === 2}
  class:col-span-3={colSpan === 3}
  class:col-span-4={colSpan === 4}
  class:col-span-5={colSpan === 5}
  class:col-span-6={colSpan === 6}
  class:col-span-7={colSpan === 7}
  class:col-span-8={colSpan === 8}
  class:col-span-9={colSpan === 9}
  class:col-span-10={colSpan === 10}
  class:col-span-11={colSpan === 11}
  class:col-span-12={colSpan === 12}
>
  <slot />
</div>

<style>
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
</style>
