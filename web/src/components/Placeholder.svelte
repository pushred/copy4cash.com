<script>
  export let width = 0
  export let height = 0

  let paddingTop = 0

  $: if (!Number.isNaN(width) && !Number.isNaN(height)) {
    paddingTop = (height / width) * 100
  }
</script>

<div class="placeholder" style={`padding-top: ${paddingTop}%`} />

<style>
  @keyframes pulse {
    from {
      opacity: 0.4;
      background-color: var(--faded-purple);
    }

    to {
      opacity: 0;
      background-color: transparent;
    }
  }

  .placeholder {
    position: relative;
    background-color: var(--dark-purple);
    animation-name: pulse;
    animation-direction: alternate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  @media (prefers-reduced-motion) {
    .placeholder {
      animation-name: none;
      background-color: var(--faded-purple);
    }
  }
</style>
