<script>
  import Grid from './Grid.svelte'
  import GridItem from './GridItem.svelte'
  import Link from './text/Link.svelte'
  import List from './List.svelte'
  import ListItem from './ListItem.svelte'
  import Logo from './Logo.svelte'

  export let data = []

  const shouldCenterLastItem = data.length % 2 !== 0
  const lastIndex = data.length - 1
</script>

<div>
  <Grid cols={[1, 2, 2, 2]}>
    {#each data as source, index}
      <GridItem
        colStart="auto"
        colSpan={index === lastIndex && shouldCenterLastItem ? 2 : 1}
      >
        <Logo brand={source.logo} />

        {#if source.articles}
          <List>
            {#each source.articles as article}
              <ListItem>
                <Link to={article.link}>
                  {article.title}
                </Link>
              </ListItem>
            {/each}
          </List>
        {/if}

        {#if source.awards}
          <List>
            {#each source.awards as award}
              <ListItem>{award}</ListItem>
            {/each}
          </List>
        {/if}
      </GridItem>
    {/each}
  </Grid>
</div>

<style>
  div {
    margin-bottom: var(--space-bottom);
  }
</style>
