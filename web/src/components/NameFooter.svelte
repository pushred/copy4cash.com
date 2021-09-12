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
    justify-content: flex-end;
    font-family: var(--ui-font);
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-1);
    color: var(--blended-gold);
    text-transform: uppercase;
  }

  .name {
    display: flex;
    gap: var(--space-2);
  }

  span {
    padding-top: 1px;
  }
</style>
