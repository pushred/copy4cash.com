<script>
  export let as = 'h4'
</script>

{#if as === 'em'}
  <em><slot /></em>
{:else}
  <h4><slot /></h4>
{/if}

<style>
  * {
    margin-bottom: var(--space-bottom);
    font-family: var(--ui-font);
    font-size: var(--text-1);
    line-height: 1.25;
    color: var(--gold);
  }
</style>
