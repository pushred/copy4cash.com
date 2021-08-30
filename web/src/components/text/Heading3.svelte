<script>
  import { onMount } from 'svelte'
  import unorphan from 'unorphan'

  let el
  let heading
  let subheading
  let isProcessed

  onMount(() => {
    const text = el.textContent
    const splitText = /(.*)(\(.*\))/.exec(text)

    unorphan('h3')

    heading = splitText ? splitText[1] : text
    heading = heading.replace('?', '?<br />')
    subheading = splitText ? splitText[2] : null
    isProcessed = true
  })
</script>

<h3 bind:this={el}>
  {#if isProcessed}
    {@html heading}
    {#if subheading}<span class="subheading">{subheading}</span>{/if}
  {:else}
    <slot />
  {/if}
</h3>

<style>
  h3 {
    --space-bottom: var(--space-4);

    margin-bottom: var(--space-bottom);
    font-size: var(--text-3);
    font-style: italic;
    font-weight: bold;
    line-height: 1.5;
    color: var(--purple);
  }

  .subheading {
    display: block;
    font-size: var(--text-2);
  }
</style>
