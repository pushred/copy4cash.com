<script>
  export let data = []

  export let columns = 4
  export let gap = true
</script>

<ul
  class:cols-2={columns === 2}
  class:cols-3={columns === 3}
  class:cols-4={columns === 4}
  class:cols-5={columns === 5}
  class:cols-6={columns === 6}
  class:cols-7={columns === 7}
  class:cols-8={columns === 8}
  class:gap
>
  {#each data as image}
    <li>
      <img src={image} alt="Cat" />
    </li>
  {/each}
</ul>

<style>
  ul {
    display: inline-grid;
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
