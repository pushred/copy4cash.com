<script>
  import AbcNews from './logos/AbcNews.svelte'
  import AdAge from './logos/AdAge.svelte'
  import Adweek from './logos/Adweek.svelte'
  import Campaign from './logos/Campaign.svelte'
  import CannesLions from './logos/CannesLions.svelte'
  import Echo from './logos/Echo.svelte'
  import TheDrum from './logos/TheDrum.svelte'
  import Webby from './logos/Webby.svelte'

  export let brand
</script>

<div>
  {#if brand === 'abc-news'}
    <AbcNews />
  {:else if brand === 'adage'}
    <AdAge />
  {:else if brand === 'adweek'}
    <Adweek />
  {:else if brand === 'campaign'}
    <Campaign />
  {:else if brand === 'cannes-lions'}
    <CannesLions />
  {:else if brand === 'echo'}
    <Echo />
  {:else if brand === 'the-drum'}
    <TheDrum />
  {:else if brand === 'webby'}
    <Webby />
  {/if}
</div>

<style>
  div {
    margin-bottom: var(--space-3);
  }
</style>
