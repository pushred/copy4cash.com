<script>
  import Loading from './icons/Loading.svelte'

  export let width = 0
  export let height = 0

  let paddingTop = 0

  $: if (!Number.isNaN(width) && !Number.isNaN(height)) {
    paddingTop = (height / width) * 100
  }
</script>

<div class="box" style={`padding-top: ${paddingTop}%`}>
  <div class="layout">
    <Loading />
  </div>
</div>

<style>
  .box {
    position: relative;
    background-color: var(--dark-purple);
  }

  .layout {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
