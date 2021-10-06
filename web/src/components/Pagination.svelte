<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'

  import { hasSwiped, isPaginationVisible, isTouch } from '../stores.js'

  import Button from './Button.svelte'
  import Flex from './Flex.svelte'
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

  let activeDotEl
  let container
  let observer

  $: if (activeDotEl) {
    const buttonEl = activeDotEl.getElement()

    if (buttonEl) {
      // TODO: only scroll when out of view
      buttonEl.parentNode.scroll({
        top: 0,
        left: buttonEl.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

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
    alignItems="center"
    justifyContent="space-between"
    paddingX={['margin-x', 'margin-x']}
    width="100%"
  >
    <Button
      disabled={currentIndex === 0}
      on:click={handleChange.bind(null, 'back')}
      icon="left-arrows"
    />
    <Flex
      justifyContent="space-between"
      marginBottom="0"
      overflowX="scroll"
      position="relative"
    >
      {#if $hasSwiped || !$isTouch}
        {#each [...Array(totalPages).keys()] as page, index}
          {#if index === currentIndex}
            <Button bind:this={activeDotEl} active icon="pagination-dot" />
          {:else}
            <Button
              on:click={handleChange.bind(null, index)}
              icon="pagination-dot"
            />
          {/if}
        {/each}
      {:else}
        <Prompt>Swipe left/right to switch projects</Prompt>
      {/if}
    </Flex>
    <Button
      disabled={currentIndex === totalPages - 1}
      on:click={handleChange.bind(null, 'next')}
      icon="right-arrows"
    />
  </Flex>
</div>
