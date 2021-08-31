<script>
  import Coin from './icons/small/Coin.svelte'
</script>

<div class="layout">
  <div class="name">
    <span>Diana Casthart</span>
    <Coin />
    <span>ACD Copywriter</span>
  </div>
  <span>Professional Smartass</span>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-1);
    color: hsla(0, 0%, 100%, 0.5);
    text-transform: uppercase;
  }

  .name {
    display: flex;
    gap: var(--space-2);
  }
</style>
