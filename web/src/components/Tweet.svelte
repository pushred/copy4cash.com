<script>
  export let html
</script>

<blockquote class="tweet">
  {@html html}
</blockquote>

<style>
  .tweet {
    margin: 3px 3px 0 3px;
    padding: var(--space-5);
    border: 1px solid var(--purple);
    border-radius: var(--space-5);
    box-shadow: 0 0 2px var(--purple), 0 0 3px var(--purple);
    font-size: var(--text-2);
    line-height: 1.5;
    color: var(--gold);
    text-align: center;
  }

  .tweet :global(p) {
    color: var(--white);
  }

  .tweet :global(p:last-of-type) {
    margin-bottom: var(--space-3);
  }

  .tweet :global(p a) {
    color: var(--light-purple);
  }

  .tweet > :global(a) {
    display: none;
  }
</style>
