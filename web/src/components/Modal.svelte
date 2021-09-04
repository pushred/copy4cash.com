<script>
  import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
  import { fade } from 'svelte/transition'

  import Button from './Button.svelte'
  import { isModalOpen } from '../stores'

  export let isOpen = false
  export let onClose

  let modalEl

  $: if (isOpen && modalEl) {
    disableBodyScroll(modalEl)
  }

  $: if (isOpen) {
    isModalOpen.set(true)
  }

  function handleClose(event) {
    clearAllBodyScrollLocks()
    isOpen = false
    isModalOpen.set(false)
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
  <div bind:this={modalEl} transition:fade={{ duration: 200 }}>
    <div class="content">
      <slot />
      <div class="modal-buttons">
        <Button
          variant="raised"
          icon="close"
          label="Close"
          on:click={handleClose}
        />
      </div>
    </div>
    <div class="backdrop" aria-hidden />
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background-color: var(--purple-black);
    opacity: 0.8;
    z-index: var(--z-10);
  }

  .content {
    position: fixed;
    inset: 0;
    z-index: var(--z-20);
    overflow-y: auto;
  }

  :global(.modal-buttons) {
    position: fixed;
    top: var(--space-8);
    right: var(--space-8);
  }
</style>
