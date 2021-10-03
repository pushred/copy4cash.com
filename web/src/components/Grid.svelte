<script>
  import Box from './Box.svelte'

  export let cols = 12
  export let gap = undefined
  export let id = undefined
  export let marginBottom = undefined
  export let minHeight = undefined
  export let paddingX = undefined
  export let width = undefined
</script>

<Box
  display="grid"
  {cols}
  {gap}
  {id}
  {marginBottom}
  {minHeight}
  {paddingX}
  {width}
>
  <slot />
</Box>
