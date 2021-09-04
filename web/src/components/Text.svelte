<script>
  import Paragraph from './text/Paragraph.svelte'

  export let align = 'center'
  export let blocks = []
</script>

<div
  class:center={align === 'center'}
  class:left={align === 'left'}
  class:right={align === 'right'}
>
  {#each blocks as block}
    <Paragraph>
      {#each block.children as span}
        {span.text}
      {/each}
    </Paragraph>
  {/each}
</div>

<style>
  div {
    margin-bottom: var(--space-bottom);
  }

  .center {
    text-align: center;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }
</style>
