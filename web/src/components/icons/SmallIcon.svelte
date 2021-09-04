<script>
  import {
    Audio,
    Close,
    Left,
    LeftArrows,
    Nib,
    PaginationDot,
    Pause,
    Play,
    Right,
    RightArrows,
  } from '.'

  export let icon = undefined
  export let visible = true
</script>

{#if icon === 'audio'}
  <Audio {visible} />
{:else if icon === 'left'}
  <Left {visible} />
{:else if icon === 'close'}
  <Close {visible} />
{:else if icon === 'left-arrows'}
  <LeftArrows {visible} />
{:else if icon === 'right'}
  <Right {visible} />
{:else if icon === 'nib'}
  <Nib {visible} />
{:else if icon === 'pagination-dot'}
  <PaginationDot {visible} />
{:else if icon === 'pause'}
  <Pause {visible} />
{:else if icon === 'play'}
  <Play {visible} />
{:else if icon === 'right-arrows'}
  <RightArrows {visible} />
{/if}
