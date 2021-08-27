<script>
  import Button from './Button.svelte'
  import Flex from './Flex.svelte'
  import PaginationDot from './icons/small/PaginationDot.svelte'

  export let currentIndex = undefined
  export let totalPages = 10

  function handleBack() {
    currentIndex = currentIndex - 1
  }

  function handleClick(index) {
    currentIndex = index
  }

  function handleNext() {
    currentIndex = currentIndex + 1
  }
</script>

<Flex justifyContent="space-between">
  <Button
    disabled={currentIndex === 0}
    on:click={handleBack}
    icon="left-arrows"
  />
  {#each [...Array(totalPages).keys()] as page, index}
    <PaginationDot
      active={index === currentIndex}
      on:click={handleClick.bind(null, index)}
    />
  {/each}
  <Button
    disabled={currentIndex === totalPages - 1}
    on:click={handleNext}
    icon="right-arrows"
  />
</Flex>
