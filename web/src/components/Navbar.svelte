<script>
  import StackedLogo from './StackedLogo.svelte'

  export let gotoHome
</script>

<nav>
  <div>
    <StackedLogo on:click={gotoHome} />
    <div class="sub-nav">
      <slot name="sub-nav" />
    </div>
  </div>
  <div class="site-nav">
    <slot name="site-nav" />
  </div>
</nav>

<svg
  width="363"
  height="2054"
  viewBox="0 0 363 2054"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 2054.78L361 0H0V2054.78Z"
    fill="#6A0BFF"
    fill-opacity="0.1"
    stroke="#6A0BFF"
    stroke-opacity="0.25"
    stroke-width="2"
  />
</svg>

<style>
  nav {
    display: flex;
    height: calc(100vh - var(--space-page-margin-y) * 2);
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: var(--space-page-margin-y);
    left: var(--space-page-margin-x);
  }

  .site-nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .sub-nav {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-5);
    padding: 0 11%;
  }

  svg {
    position: fixed;
  }

  svg {
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
  }
</style>
