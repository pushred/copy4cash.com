<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { Button, Grid, GridItem, Navbar, NavLink } from '.'
</script>

<Meta title="Navbar" component={Navbar} />

<Story name="Primary + Secondary Nav">
  <Grid cols={[6, 6, 12]}>
    <GridItem colStart={[2, 3, 1]} colSpan={[4, 2, 2]} rowStart={[2, 2, 1]}>
      <Navbar isLarge={true}>
        <svelte:fragment slot="sub-nav">
          <Button variant="raised" icon="left" />
          <Button variant="raised" icon="menu" />
          <Button variant="raised" icon="right" />
        </svelte:fragment>
        <svelte:fragment slot="site-nav">
          <NavLink icon="hire" label="Hire" />
          <NavLink icon="work" label="Work" />
        </svelte:fragment>
      </Navbar>
    </GridItem>
  </Grid>
</Story>
