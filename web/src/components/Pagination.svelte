<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'

  import { hasSwiped, isPaginationVisible, isTouch } from '../stores.js'

  import Button from './Button.svelte'
  import Flex from './Flex.svelte'
  import PaginationDot from './icons/small/PaginationDot.svelte'
  import Prompt from './text/Prompt.svelte'

  export let currentIndex = undefined
  export let totalPages = 10

  const dispatch = createEventDispatcher()

  function handleChange(selection) {
    if (selection === 'back') currentIndex = currentIndex - 1
    if (selection === 'next') currentIndex = currentIndex + 1
    if (typeof selection === 'number') currentIndex = selection
    dispatch('change', currentIndex)
  }

  let container
  let observer

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isPaginationVisible.set(true)
        } else {
          isPaginationVisible.set(false)
        }
      },
      {
        rootMargin: '0px 0px 0px 0px',
      }
    )

    observer.observe(container)
  })

  onDestroy(() => {
    observer?.unobserve(container)
  })
</script>

<div bind:this={container}>
  <Flex
    justifyContent="space-between"
    paddingX={['margin-x', 'margin-x']}
    width="100%"
  >
    <Button
      disabled={currentIndex === 0}
      on:click={handleChange.bind(null, 'back')}
      icon="left-arrows"
      --space-bottom="0"
    />
    {#if $hasSwiped || !$isTouch}
      {#each [...Array(totalPages).keys()] as page, index}
        <Button
          active={index === currentIndex}
          on:click={handleChange.bind(null, index)}
          icon="pagination-dot"
          --space-bottom="0"
        />
      {/each}
    {:else}
      <Prompt>Swipe left/right to switch projects</Prompt>
    {/if}

    <Button
      disabled={currentIndex === totalPages - 1}
      on:click={handleChange.bind(null, 'next')}
      icon="right-arrows"
      --space-bottom="0"
    />
  </Flex>
</div>
