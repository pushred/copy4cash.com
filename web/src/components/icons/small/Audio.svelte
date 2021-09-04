<script>
  import { onDestroy, onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  export let glow = false
  export let playing = false
  export let x = undefined
  export let y = undefined

  const DURATIONS = {
    glow: 2000,
    sound: 500,
  }

  let animationInterval
  let wave1El
  let wave2El

  function animate() {
    wave1El.animate([{ opacity: 0 }, { opacity: 1 }], {
      iterations: 1,
      endDelay: DURATIONS.sound,
      duration: DURATIONS.sound,
    })

    wave2El.animate([{ opacity: 0 }, { opacity: 1 }], {
      iterations: 1,
      delay: DURATIONS.sound / 2,
      duration: DURATIONS.sound,
    })
  }

  $: if (playing && !animationInterval) {
    animate()
    animationInterval = setInterval(animate, DURATIONS.sound * 2)
    wave1El.style.opacity = 1
    wave2El.style.opacity = 1
  } else if (!playing && animationInterval) {
    wave1El.style.opacity = 0
    wave2El.style.opacity = 0
    clearInterval(animationInterval)
    animationInterval = undefined
  }

  onMount(() => {
    wave1El.style.opacity = 0
    wave2El.style.opacity = 0
  })

  onDestroy(() => {
    clearInterval(animationInterval)
  })
</script>

<svg
  {x}
  {y}
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:click
>
  <path
    d="M8.63003 14.9167H5.51858C5.38104 14.9167 5.24914 14.8552 5.15189 14.7458C5.05464 14.6364 5 14.488 5 14.3333V9.66667C5 9.51196 5.05464 9.36358 5.15189 9.25419C5.24914 9.14479 5.38104 9.08333 5.51858 9.08333H8.63003L13.2972 5V19L8.63003 14.9167Z"
    stroke="#FFB32C"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  {#if glow}
    <path
      in:fade={{ duration: DURATIONS.glow, delay: 100, easing: expoOut }}
      d="M8.63003 14.9167H5.51858C5.38104 14.9167 5.24914 14.8552 5.15189 14.7458C5.05464 14.6364 5 14.488 5 14.3333V9.66667C5 9.51196 5.05464 9.36358 5.15189 9.25419C5.24914 9.14479 5.38104 9.08333 5.51858 9.08333H8.63003L13.2972 5V19L8.63003 14.9167Z"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}

  <path
    bind:this={wave1El}
    d="M15.7996 10.3501C15.9922 10.5668 16.145 10.824 16.2492 11.1071C16.3535 11.3902 16.4071 11.6936 16.4071 12C16.4071 12.3064 16.3535 12.6098 16.2492 12.8929C16.145 13.176 15.9922 13.4332 15.7996 13.6499"
    stroke="#00FF8B"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    bind:this={wave2El}
    d="M17.6331 8.28769C18.0664 8.7752 18.4102 9.35395 18.6448 9.99091C18.8793 10.6279 19 11.3106 19 12C19 12.6894 18.8793 13.3721 18.6448 14.0091C18.4102 14.646 18.0664 15.2248 17.6331 15.7123"
    stroke="#00FF8B"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
