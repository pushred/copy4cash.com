<script>
  import { kebabCase } from 'lodash'
  import { afterUpdate } from 'svelte'
  import unorphan from 'unorphan'

  export let textTransform = 'uppercase'

  let anchorId
  let headingEl

  afterUpdate(() => {
    unorphan('h3')
    anchorId = kebabCase(headingEl.textContent)
  })
</script>

<h3
  bind:this={headingEl}
  class:text-transform-none={textTransform === 'none'}
  id={anchorId}
>
  <a href={`#${anchorId}`}>
    <slot />
  </a>
</h3>

<style>
  h3 {
    --space-bottom: var(--space-4);

    margin-bottom: var(--space-bottom);
    color: var(--purple);
    font-family: var(--heading-font);
    font-size: var(--text-3);
    font-weight: 700;
    line-height: 1.5;
    text-transform: uppercase;
  }

  h3.text-transform-none {
    text-transform: none;
  }

  h3 :global(.subheading) {
    display: block;
    font-size: var(--text-2);
  }
</style>
