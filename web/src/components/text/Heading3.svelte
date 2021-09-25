<script>
  import { afterUpdate } from 'svelte'
  import unorphan from 'unorphan'

  afterUpdate(() => {
    unorphan('h3')
  })
</script>

<h3>
  <slot />
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

  h3 :global(.subheading) {
    display: block;
    font-size: var(--text-2);
  }
</style>
