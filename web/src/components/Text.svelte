<script>
  import Paragraph from './text/Paragraph.svelte'
  import { getResponsivePropValues, onBreakpointChange } from '../theme.js'

  export let align = 'center'
  export let blocks = []

  let props = {
    align,
  }

  $: {
    onBreakpointChange((breakpoint) => {
      props = getResponsivePropValues(breakpoint, {
        align,
      })
    })
  }
</script>

<div>
  {#each blocks as block}
    <Paragraph align={props.align}>
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
