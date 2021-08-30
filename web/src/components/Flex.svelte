<script>
  export let alignItems = undefined
  export let gap = undefined
  export let position = undefined
  export let justifyContent = undefined
  export let inset = undefined
</script>

<div
  class:absolute={position === 'absolute'}
  class:inset-0={inset === '0'}
  class:items-center={alignItems === 'center'}
  class:justify-center={justifyContent === 'center'}
  class:justify-space-between={justifyContent === 'space-between'}
  class:gap-2={gap === '2'}
  class:gap-3={gap === '3'}
  class:gap-4={gap === '4'}
  class:gap-5={gap === '5'}
  class:gap-6={gap === '6'}
  class:gap-7={gap === '7'}
  class:gap-8={gap === '8'}
  class:gap-9={gap === '9'}
  class:gap-10={gap === '10'}
>
  <slot />
</div>

<style>
  div {
    display: flex;
    width: var(--width);
    margin-bottom: var(--space-bottom);
  }

  .absolute {
    position: absolute;
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
