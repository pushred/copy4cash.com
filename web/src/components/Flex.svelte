<script>
  export let alignItems
  export let position
  export let justifyContent
  export let inset
</script>

<div
  class:absolute={position === 'absolute'}
  class:inset-0={inset === '0'}
  class:items-center={alignItems === 'center'}
  class:justify-center={justifyContent === 'center'}
>
  <slot />
</div>

<style>
  div {
    display: flex;
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
</style>
