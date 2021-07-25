<script>
  import { onMount } from 'svelte'

  import Button from './Button.svelte'

  export let startIndex = 0
  export let data = []

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
    const xPos = carouselEl.scrollLeft + el.getBoundingClientRect().left

    carouselEl.scrollTo(xPos, 0)
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
    slide()
  })
</script>

<svelte:window on:keydown={handleKeydown} />

<ul class="carousel" bind:this={carouselEl}>
  {#each data as image}
    <li class="image">
      <img src={image.url} alt={image.description} />
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

<style>
  .carousel {
    display: flex;
    position: absolute;
    inset: 0;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .image {
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    display: flex;
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
