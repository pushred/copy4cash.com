<script>
  import AudioIcon from './icons/small/Audio.svelte'
  import Button from './Button.svelte'
  import Flex from './Flex.svelte'
  import Heading4 from './text/Heading4.svelte'

  export let caption = undefined
  export let url = undefined

  let audio
  let bufferedEl
  let canPlaythrough = false
  let playedEl
  let isPlaying = false

  function handleToggle() {
    isPlaying = !isPlaying

    if (!isPlaying && audio) {
      audio.pause()
    } else if (isPlaying && canPlaythrough) {
      audio.play()
    }

    if (isPlaying && !audio && url) {
      audio = new Audio(url)
      audio.load()

      audio.addEventListener('canplaythrough', () => {
        canPlaythrough = true
        if (isPlaying) audio.play()
      })

      audio.addEventListener('timeupdate', function () {
        const duration = audio.duration
        if (duration > 0) {
          playedEl.style.width = (audio.currentTime / duration) * 100 + '%'
        }
      })
    }
  }
</script>

<article>
  <Heading4>{caption}</Heading4>
  <Flex --align-items="center" --gap="var(--space-2)">
    <Button
      --space-bottom="0"
      icon={isPlaying ? 'pause' : 'play'}
      variant="raised"
      on:click={handleToggle}
    />
    <ul class="progress">
      <li bind:this={bufferedEl} class="buffered" />
      <li bind:this={playedEl} class="played" />
    </ul>
    <AudioIcon glow={isPlaying} playing={isPlaying} />
  </Flex>
</article>

<style>
  article {
    margin-bottom: var(--space-bottom);
  }

  .progress {
    position: relative;
    flex-grow: 1;
    height: var(--height-1);
    background-color: hsla(38.4, 100%, 58.6%, 0.1);
    border-radius: var(--height-1);
    min-width: 20em;
    overflow: hidden;
  }

  .buffered,
  .played {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: var(--height-1);
  }

  .buffered {
    background-color: var(--purple);
  }

  .played {
    background-color: var(--gold);
  }
</style>
