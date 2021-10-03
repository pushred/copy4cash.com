<script>
  import { onMount } from 'svelte'

  import Button from './Button.svelte'
  import Image from './Image.svelte'
  import Video from './Video.svelte'

  import { onBreakpointChange } from '../theme.js'

  export let startIndex = 0
  export let data = []
  export let variant = 'block'

  let sm = false
  let md = false

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
  })

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

{#if Array.isArray(data)}
  <div
    class="carousel"
    class:block={variant === 'block'}
    class:fullscreen={variant === 'fullscreen'}
    class:sm
    class:md
  >
    <ul bind:this={carouselEl}>
      {#each data as slide}
        <li class="slide">
          {#if slide._type === 'image'}
            <Image document={slide} />
          {:else if slide._type === 'video'}
            <Video
              caption={slide.caption}
              width="100%"
              originalWidth={slide.video.width}
              originalHeight={slide.video.height}
              vimeoId={slide.video.vimeoId}
            />
          {/if}
        </li>
      {/each}
    </ul>

    {#if !sm && !md && data.length > 1}
      <nav>
        <Button
          variant="raised"
          icon="left"
          label="Back"
          on:click={() => slide('next')}
        />
        <Button
          variant="raised"
          icon="right"
          label="Next"
          on:click={() => slide('next')}
        />
      </nav>
    {/if}
  </div>
{/if}

<style>
  ::-webkit-scrollbar {
    display: none;
  }

  .carousel {
    margin-bottom: var(--space-bottom);
  }

  .carousel.block {
    position: relative;
  }

  .carousel.block .slide {
    width: 100%;
  }

  .carousel.block.sm .slide {
    width: 90%;
    margin: 0 var(--space-2);
  }

  .carousel.block.md .slide {
    width: 95%;
    margin: 0 var(--space-2);
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

  :global(.carousel.fullscreen img.is-vertical) {
    max-height: 100vh;
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
    right: calc(var(--space-14) * -1);
    bottom: 0;
    left: calc(var(--space-14) * -1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
  }

  .carousel.fullscreen nav {
    right: var(--space-8);
    left: var(--space-8);
  }
</style>
