<script>
  import RaisedButton from './Button.raised.svelte'

  import Back from './icons/small/Back.svelte'
  import Close from './icons/small/Close.svelte'
  import LeftArrows from './icons/small/LeftArrows.svelte'
  import Menu from './icons/small/Menu.svelte'
  import Next from './icons/small/Next.svelte'
  import Pause from './icons/small/Pause.svelte'
  import Play from './icons/small/Play.svelte'
  import RightArrows from './icons/small/RightArrows.svelte'

  export let disabled = false
  export let hover = false
  export let icon = undefined
  export let label = undefined
  export let variant = undefined

  let iconX = 0
  let iconY = 0

  if (variant === 'raised') iconX = 4
  if (variant === 'raised') iconY = 4

  let Icon

  if (icon === 'back') Icon = Back
  if (icon === 'close') Icon = Close
  if (icon === 'left-arrows') Icon = LeftArrows
  if (icon === 'menu') Icon = Menu
  if (icon === 'next') Icon = Next
  if (icon === 'pause') Icon = Pause
  if (icon === 'play') Icon = Play
  if (icon === 'right-arrows') Icon = RightArrows

  function handleEnter() {
    hover = true
  }

  function handleLeave() {
    hover = false
  }
</script>

<button
  {disabled}
  class:disabled
  class={$$props.class}
  aria-label={label}
  title={label}
  on:click
  on:blur={handleLeave}
  on:focus={handleEnter}
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
>
  {#if variant === 'raised'}
    <RaisedButton {hover}>
      <svelte:component this={Icon} {disabled} {hover} x={iconX} y={iconY} />
    </RaisedButton>
  {:else if icon}
    <svelte:component this={Icon} {disabled} {hover} x={iconX} y={iconY} />
  {:else}
    <slot />
  {/if}
</button>

<style>
  button {
    pointer-events: auto;
  }

  button:focus {
    outline: none;
  }

  .disabled {
    cursor: not-allowed;
  }
</style>
