<script>
  export let title = 'Video'
  export let vimeoId
  export let originalWidth
  export let originalHeight

  export let width = originalWidth
  let height = originalHeight

  function proportionalHeight(node) {
    if (width === originalWidth) return

    function setHeight() {
      const offsetWidth = node.offsetWidth
      const scaleFactor = offsetWidth / originalWidth
      node.setAttribute('height', originalHeight * scaleFactor)
    }

    setHeight()
    window.addEventListener('resize', setHeight)

    return {
      destroy() {
        window.removeEventListener('resize', setHeight)
      },
    }
  }
</script>

{#if vimeoId}
  <iframe
    use:proportionalHeight
    {width}
    {height}
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    frameBorder="0"
    src={`https://player.vimeo.com/video/${vimeoId}`}
    {title}
  />
{/if}
