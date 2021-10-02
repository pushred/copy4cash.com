<script>
  import Paragraph from './text/Paragraph.svelte'
  import { getResponsivePropValues, onBreakpointChange } from '../theme.js'

  export let align = 'center'
  export let blocks = []

  let props = {
    align,
  }

  const markDefs = blocks.reduce((accumulator, block) => {
    if (block._type !== 'block') return accumulator

    block.markDefs.forEach((markDef) => {
      accumulator[markDef._key] = markDef
    })

    return accumulator
  }, {})

  let markDefKeys = Object.keys(markDefs)

  // include `undefined` to trigger below loop once when no markDefs exist
  if (markDefKeys.length === 0) markDefKeys = [undefined]

  $: {
    onBreakpointChange((breakpoint) => {
      props = getResponsivePropValues(breakpoint, {
        align,
      })
    })
  }
</script>

{#if Array.isArray(blocks)}
  <div>
    {#each blocks as block}
      <Paragraph align={props.align}>
        {#each block.children as span}
          {#each markDefKeys as key}
            <!-- TODO: try refactoring using svelte:self with a formatting tag component-->
            {#if span.marks.includes(key) && markDefs[key]._type === 'link'}
              <a href={markDefs[key].href} target="_blank">
                {#if span.marks.includes('em') && span.marks.includes('strong')}
                  <strong><em>{span.text} </em></strong>
                {:else if span.marks.includes('em')}
                  <em>{span.text}</em>
                {:else if span.marks.includes('strong')}
                  <strong>{span.text}</strong>
                {:else}
                  {span.text}
                {/if}
              </a>
            {:else if span.marks.includes('em') && span.marks.includes('strong')}
              <strong><em>{span.text} </em></strong>
            {:else if span.marks.includes('em')}
              <em>{span.text}</em>
            {:else if span.marks.includes('strong')}
              <strong>{span.text}</strong>
            {:else}
              {span.text}
            {/if}
          {/each}
        {/each}
      </Paragraph>
    {/each}
  </div>
{/if}

<style>
  div {
    margin-bottom: var(--space-bottom);
  }

  a {
    color: var(--blended-gold);
    text-decoration: underline;
    text-decoration-color: var(--blended-gold);
    text-decoration-skip-ink: auto;
  }
</style>
