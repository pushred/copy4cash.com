<script>
  import { onMount } from 'svelte'

  import Button from './Button.svelte'
  import Video from './Video.svelte'

  export let startIndex = 0
  export let data = []
  export let variant = 'block'

  let carouselEl
  let currentIndex = startIndex

  function slide(direction) {
    const prevIndex = currentIndex - 1
    const nextIndex = currentIndex + 1
    const lastIndex = data.length - 1

    if (direction === 'back') {
      currentIndex = data[prevIndex] === undefined ? lastIndex : prevIndex
    } else if (direction === 'next') {
      currentIndex = data[nextIndex] === undefined ? 0 : nextIndex
    }

    const el = carouselEl.children[currentIndex]

    carouselEl.scrollTo(el.offsetLeft, 0)
  }

  function handleKeydown(event) {
    if (event.key === 'ArrowLeft') {
      slide('back')
    }

    if (event.key === 'ArrowRight') {
      slide('next')
    }
  }

  onMount(() => {
    if (startIndex !== 0) slide()
  })
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  class="carousel"
  class:block={variant === 'block'}
  class:fullscreen={variant === 'fullscreen'}
>
  <ul bind:this={carouselEl}>
    {#each data as slide}
      <li class="slide">
        {#if slide.image}
          <img src={slide.image.url} alt={slide.image.description} />
        {:else if slide.video}
          <Video
            caption={slide.video.caption}
            width={slide.video.width}
            height={slide.video.height}
            originalWidth={slide.video.originalWidth}
            originalHeight={slide.video.originalHeight}
            vimeoId={slide.video.vimeoId}
          />
        {/if}
      </li>
    {/each}
  </ul>

  <nav>
    <Button
      class="back"
      icon="back"
      label="Back"
      on:click={() => slide('next')}
    />
    <Button
      class="next"
      icon="next"
      label="Next"
      on:click={() => slide('next')}
    />
  </nav>
</div>

<style>
  .carousel {
    margin-bottom: var(--space-Carousel);
  }

  .carousel.block {
    position: relative;
  }

  .carousel.block .slide {
    width: 100%;
  }

  .carousel.fullscreen {
    position: fixed;
    inset: 0;
  }

  .carousel.fullscreen .slide {
    width: 100vw;
    height: 100vh;
  }

  :global(.carousel.block .slide > *) {
    width: 100%;
  }

  :global(.carousel.fullscreen .slide > *) {
    max-height: 100%;
  }

  ul {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .slide {
    position: relative;
    display: flex;
    padding: 1px; /* avoids visibility of adjacent images re: rounding */
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }

  nav {
    position: absolute;
    top: 0;
    right: var(--space-8);
    bottom: 0;
    left: var(--space-8);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
