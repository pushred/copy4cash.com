<script>
  import Carousel from './Carousel.svelte'
  import Image from './Image.svelte'
  import Modal from './Modal.svelte'
  import Video from './Video.svelte'

  export let data = []

  export let columns = 4
  export let gap = true

  let viewerIndex

  function handleClick(index) {
    viewerIndex = index
  }

  function handleModalClose() {
    viewerIndex = undefined
  }
</script>

<ul
  class="gallery"
  class:cols-1={columns === 1}
  class:cols-2={columns === 2}
  class:cols-3={columns === 3}
  class:cols-4={columns === 4}
  class:cols-5={columns === 5}
  class:cols-6={columns === 6}
  class:cols-7={columns === 7}
  class:cols-8={columns === 8}
  class:gap
>
  {#each data as item, index}
    <li on:click={() => handleClick(index)}>
      {#if item._type === 'accessible-image'}
        <Image document={item} />
      {:else if item._type === 'video'}
        <Video
          width="100%"
          originalWidth={item.video?.width}
          originalHeight={item.video?.height}
          vimeoId={item.video?.vimeoId}
        />
      {/if}
    </li>
  {/each}
</ul>

{#if viewerIndex !== undefined}
  <Modal isOpen={true} onClose={handleModalClose}>
    <Carousel {data} startIndex={viewerIndex} variant="fullscreen" />
  </Modal>
{/if}

<style>
  .gallery {
    display: grid;
    margin-bottom: var(--space-bottom);
  }

  .cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .cols-5 {
    grid-template-columns: repeat(5, 1fr);
  }
  .cols-6 {
    grid-template-columns: repeat(6, 1fr);
  }
  .cols-7 {
    grid-template-columns: repeat(7, 1fr);
  }
  .cols-8 {
    grid-template-columns: repeat(8, 1fr);
  }

  .gap {
    grid-gap: 10px;
  }
</style>
