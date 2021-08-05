<script>
  import { fade } from 'svelte/transition'

  import Button from './Button.svelte'

  export let isOpen = false
  export let onClose

  function handleClose(event) {
    isOpen = false
    if (typeof onClose === 'function') onClose()
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      handleClose()
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div transition:fade={{ duration: 200 }}>
    <div class="content">
      <slot />
      <Button
        class="button"
        icon="close"
        label="Close"
        on:click={handleClose}
      />
    </div>
    <div class="backdrop" aria-hidden />
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background-color: var(--black);
    opacity: 0.5;
    z-index: var(--z-10);
  }

  .content {
    position: fixed;
    inset: 0;
    z-index: var(--z-20);
  }

  :global(.button) {
    position: absolute;
    top: var(--space-8);
    right: var(--space-8);
  }
</style>
