<script>
  export let hasIcon = false
  export let hover = false
  export let label = undefined

  const iconWidth = 24
  const height = 36

  const shadowInset = 6
  const shadowStroke = 2

  let labelEl
  let width = 0
  let viewboxWidth = 0

  $: if (labelEl) {
    // TODO: simplify + improve font resizing by only drawing the shadow with SVG
    const labelWidth = labelEl.getBoundingClientRect().width
    width = hasIcon ? iconWidth + labelWidth : labelWidth
    viewboxWidth = width + shadowStroke + shadowInset
  }

  // TODO: animate button depress on click
</script>

<svg
  class:has-icon={hasIcon}
  class:hover
  width={viewboxWidth}
  {height}
  viewBox={`0 0 ${viewboxWidth} ${height}`}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    class="surface"
    {width}
    height="30"
    x="1"
    y="1"
    rx="1"
    stroke="#544370"
    stroke-width={shadowStroke}
  />
  <path
    d={[
      `M${shadowInset},${height - shadowStroke / 2}`,
      `l${width - shadowStroke / 2},0`,
      `v${(height - shadowInset - shadowStroke) * -1}`,
    ].join(' ')}
    class="shadow"
    stroke="#544370"
    stroke-width={shadowStroke}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <slot />
</svg>

{#if label}<span class="label" bind:this={labelEl}>{label}</span>{/if}

<style>
  .label {
    position: absolute; /* relative to parent button */
    top: 0;
    left: 0;
    padding: 0 var(--space-3) 0 var(--space-2);
    font-weight: 600;
    font-size: var(--text-2);
    color: var(--purple);
    line-height: 30px;
  }

  svg.has-icon + .label {
    left: 24px;
  }

  .hover + .label {
    color: var(--neon-green);
    transition: var(--color-transition);
  }

  .hover .surface {
    stroke: var(--purple);
  }

  .shadow {
    opacity: 0.5;
    transition: var(--slow-opacity-transition);
  }

  .hover .shadow {
    opacity: 1;
    transition-delay: 500;
  }
</style>
