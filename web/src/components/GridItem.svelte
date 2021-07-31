<script>
  export let colStart = 1
  export let colSpan = 1
</script>

<div class={`col-start-${colStart} col-span-${colSpan}`}>
  <slot />
</div>

<style>
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
