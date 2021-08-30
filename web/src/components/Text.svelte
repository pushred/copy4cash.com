<script>
  import Paragraph from './text/Paragraph.svelte'

  export let blocks = []
</script>

<div>
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
</style>
