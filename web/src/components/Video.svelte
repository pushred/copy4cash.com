<script>
  import { nanoid } from 'nanoid'

  export let caption
  export let title = 'Video'
  export let vimeoId
  export let originalWidth
  export let originalHeight

  export let width = originalWidth
  export let height = originalHeight

  let captionId = caption ? nanoid() : undefined

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

<div class="video">
  {#if caption}
    <span class="caption" id={captionId}>{caption}</span>
  {/if}

  {#if vimeoId}
    <iframe
      use:proportionalHeight
      {width}
      {height}
      aria-describedby={captionId}
      allow="autoplay; fullscreen; picture-in-picture"
      frameBorder="0"
      src={`https://player.vimeo.com/video/${vimeoId}`}
      {title}
    />
  {/if}
</div>

<style>
  .video {
    position: relative;
  }

  .caption {
    position: absolute;
    top: var(--space-6);
    right: var(--space-6);
    font-weight: bold;
    line-height: 1;
    color: var(--white);
  }
</style>
