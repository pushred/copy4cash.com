<script>
  export let align = undefined
  export let size = 2
</script>

<p
  class:left={align === 'left'}
  class:center={align === 'center'}
  class:right={align === 'right'}
  class:size-1={size === 1}
  class:size-2={size === 2}
>
  <slot />
</p>

<style>
  p {
    margin-bottom: 1.5em;
    color: var(--text-color);
    font-family: var(--text-font);
    line-height: 2;
  }

  p.left {
    text-align: left;
  }

  p.center {
    text-align: center;
  }

  p.right {
    text-align: left;
  }

  p.size-1 {
    font-size: var(--text-1);
  }

  p.size-2 {
    font-size: var(--text-2);
  }

  p:last-child {
    margin-bottom: 0;
  }
</style>
