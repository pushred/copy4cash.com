<script>
  import a from './tags/a.svelte'
  import button from './tags/button.svelte'
  import RaisedButton from './Button.raised.svelte'

  import Close from './icons/small/Close.svelte'
  import Down from './icons/small/Down.svelte'
  import Email from './icons/small/Email.svelte'
  import Left from './icons/small/Left.svelte'
  import LeftArrows from './icons/small/LeftArrows.svelte'
  import LinkedIn from './icons/small/LinkedIn.svelte'
  import Menu from './icons/small/Menu.svelte'
  import Pause from './icons/small/Pause.svelte'
  import Play from './icons/small/Play.svelte'
  import Right from './icons/small/Right.svelte'
  import RightArrows from './icons/small/RightArrows.svelte'
  import WorkingNotWorking from './icons/small/WorkingNotWorking.svelte'

  export let disabled = false
  export let download = undefined
  export let hover = false
  export let icon = undefined
  export let label = undefined
  export let url = undefined
  export let variant = undefined

  let iconX = 0
  let iconY = 0

  if (variant === 'raised' || variant === 'raised-text') iconX = 4
  if (variant === 'raised' || variant === 'raised-text') iconY = 4

  let Icon

  $: {
    if (icon === 'close') Icon = Close
    if (icon === 'down') Icon = Down
    if (icon === 'email') Icon = Email
    if (icon === 'left-arrows') Icon = LeftArrows
    if (icon === 'left') Icon = Left
    if (icon === 'linkedin') Icon = LinkedIn
    if (icon === 'menu') Icon = Menu
    if (icon === 'pause') Icon = Pause
    if (icon === 'play') Icon = Play
    if (icon === 'right-arrows') Icon = RightArrows
    if (icon === 'right') Icon = Right
    if (icon === 'working-not-working') Icon = WorkingNotWorking
  }

  function handleEnter() {
    hover = true
  }

  function handleLeave() {
    hover = false
  }
</script>

<svelte:component
  this={url ? a : button}
  class="button"
  {disabled}
  {download}
  aria-label={label}
  href={url}
  title={label}
  on:click
  on:blur={handleLeave}
  on:focus={handleEnter}
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
>
  {#if variant === 'raised' || variant === 'raised-text'}
    <RaisedButton
      {hover}
      hasIcon={Boolean(icon)}
      label={variant === 'raised-text' ? label : undefined}
    >
      <svelte:component this={Icon} {disabled} {hover} x={iconX} y={iconY} />
    </RaisedButton>
  {:else if icon}
    <svelte:component this={Icon} {disabled} {hover} x={iconX} y={iconY} />
  {:else}
    <slot />
  {/if}
</svelte:component>

<style>
  :global(.button) {
    display: inline-block;
    margin-bottom: var(--space-bottom);
    position: relative; /* for RaisedButton content */
    pointer-events: auto;
    white-space: nowrap;
  }

  :global(.button:focus) {
    outline: none;
  }

  :global(.button:disabled) {
    cursor: not-allowed;
  }
</style>
