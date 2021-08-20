<script>
  import { onMount } from 'svelte'

  let dollarEl
  let strikeEl

  const DURATIONS = {
    dollar: 3000,
    strike: 1500,
  }

  const TIMELINE = {
    dollar: 500,
    strike: DURATIONS.strike,
  }

  function drawLine(path, { delay, duration, endDelay } = {}) {
    if (path === undefined) return

    const length = path.getTotalLength()

    path.style.strokeDasharray = length
    path.style.strokeDashoffset = length

    path.animate(
      [
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0.5 },
        { strokeDashoffset: 0 },
      ],
      {
        delay,
        duration,
        endDelay,
        easing: 'ease-out',
        fill: 'forwards',
        iterations: Infinity,
      }
    )
  }

  onMount(() => {
    drawLine(dollarEl, {
      delay: TIMELINE.dollar,
      duration: DURATIONS.dollar,
    })
    drawLine(strikeEl, {
      delay: TIMELINE.strike,
      duration: DURATIONS.strike,
      endDelay: 1500,
    })
  })
</script>

<svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    bind:this={strikeEl}
    d="M36.6897 8L28.6354 56"
    stroke="#6A0BFF"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <path
    bind:this={dollarEl}
    d="M28.8755 35.656L26.9845 34.4939C23.0414 32.0588 20.3728 30.2602 20.3728 24.8677M32.984 46.8125C33.662 47.1509 34.58 47.2526 35.3378 47.2521C35.6971 47.2569 36.0538 47.1895 36.3867 47.054C36.7196 46.9184 37.0219 46.7175 37.2757 46.463C37.5295 46.2086 37.7297 45.9058 37.8645 45.5726C37.9992 45.2394 38.0657 44.8825 38.06 44.5231C38.06 42.3987 37.1851 40.9074 34.4124 39.0685M26.605 50.7486C23.6392 49.3749 20.9606 46.7567 19.6188 42.5516L26.8099 37.8493C27.3439 39.1211 27.8735 40.2497 28.3986 41.2349M36.2026 28.4716L38.3506 29.8538C41.3735 31.8254 44.3812 34.556 44.3812 39.3641C44.3812 46.4393 38.8729 51.9477 32.0294 51.9477M31.9857 17.821C31.3129 17.5803 30.6044 17.4543 29.8899 17.4482C28.3784 17.4482 27.2213 18.3752 27.2213 19.7086C27.2213 21.5795 28.0896 22.9969 30.916 25.0827M38.2448 12.8601C39.9376 13.0533 41.7328 13.3757 43.3366 13.673L41.538 27.7075C40.366 25.332 38.8449 23.1453 37.0255 21.2201M20.3728 24.8744C20.3728 19.0923 25.1439 13.8728 32.8372 12.8685"
    stroke="#6A0BFF"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
