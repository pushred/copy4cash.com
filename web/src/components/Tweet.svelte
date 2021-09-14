<script>
  export let html

  import Panel from './Panel.svelte'
</script>

<Panel>
  <blockquote class="html">
    {@html html}
  </blockquote>
</Panel>

<style>
  .html {
    color: var(--gold);
  }

  .html :global(p) {
    color: var(--white);
  }

  .html :global(p:last-of-type) {
    margin-bottom: var(--space-3);
  }

  .html :global(p a) {
    color: var(--light-purple);
  }

  .html > :global(a) {
    display: none;
  }
</style>
