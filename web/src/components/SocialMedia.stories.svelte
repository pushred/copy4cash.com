<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Tweet from './Tweet.svelte'
</script>

<Meta title="Social Media" component={Tweet} />

<Story name="Twitter">
  <Tweet
    html={`<p lang="en" dir="ltr">&quot;Why the hell would the mouse in this D-Con commercial risk life and limb to eat poison?&quot; I ask while checking my Twitter account for the twentieth time in a half hour</p>&mdash; Bo Bolander (@BBolander) <a href="https://twitter.com/BBolander/status/1044748610737524736?ref_src=twsrc%5Etfw">September 26, 2018</a>`}
  />
</Story>
