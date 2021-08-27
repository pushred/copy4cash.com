<script>
  import {
    Audio,
    Back,
    Close,
    LeftArrows,
    Next,
    Nib,
    PaginationDot,
    Pause,
    Play,
    RightArrows,
  } from '.'

  export let icon = undefined
  export let visible = true
</script>

{#if icon === 'audio'}
  <Audio {visible} />
{:else if icon === 'back'}
  <Back {visible} />
{:else if icon === 'close'}
  <Close {visible} />
{:else if icon === 'left-arrows'}
  <LeftArrows {visible} />
{:else if icon === 'next'}
  <Next {visible} />
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
