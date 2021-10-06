<script>
  import Box from './Box.svelte'

  export let alignItems = undefined
  export let bottom = undefined
  export let flexDirection = undefined
  export let gap = undefined
  export let id = undefined
  export let inset = undefined
  export let justifyContent = undefined
  export let marginBottom = undefined
  export let overflowX = undefined
  export let paddingX = undefined
  export let position = undefined
  export let width = undefined
  export let wrap = undefined
</script>

<Box
  display="flex"
  {alignItems}
  {bottom}
  {flexDirection}
  {gap}
  {id}
  {inset}
  {justifyContent}
  {marginBottom}
  {overflowX}
  {paddingX}
  {position}
  {width}
  {wrap}
>
  <slot />
</Box>
