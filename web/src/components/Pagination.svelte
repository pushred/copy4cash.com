<script>
  import { createEventDispatcher } from 'svelte'

  import { isTouch } from '../stores.js'
  import { onBreakpointChange } from '../theme.js'

  import Button from './Button.svelte'
  import Flex from './Flex.svelte'
  import PaginationDot from './icons/small/PaginationDot.svelte'
  import Prompt from './text/Prompt.svelte'

  export let currentIndex = undefined
  export let totalPages = 10

  const initialIndex = currentIndex
  const dispatch = createEventDispatcher()

  let hasSwiped = false

  $: if (currentIndex !== initialIndex && currentIndex !== undefined) {
    hasSwiped = true
  }

  function handleChange(selection) {
    if (selection === 'back') currentIndex = currentIndex - 1
    if (selection === 'next') currentIndex = currentIndex + 1
    if (typeof selection === 'number') currentIndex = selection
    dispatch('change', currentIndex)
  }
</script>

<Flex justifyContent="space-between" --width="100%">
  <Button
    disabled={currentIndex === 0}
    on:click={handleChange.bind(null, 'back')}
    icon="left-arrows"
  />
  {#if hasSwiped || !$isTouch}
    {#each [...Array(totalPages).keys()] as page, index}
      <PaginationDot
        active={index === currentIndex}
        on:click={handleChange.bind(null, index)}
      />
    {/each}
  {:else}
    <Prompt>Swipe left/right to switch projects</Prompt>
  {/if}

  <Button
    disabled={currentIndex === totalPages - 1}
    on:click={handleChange.bind(null, 'next')}
    icon="right-arrows"
  />
</Flex>
