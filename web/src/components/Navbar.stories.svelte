<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { Button, Grid, GridItem, Navbar, NavLink } from '.'
  import Layout from '../routes/__layout.svelte'
</script>

<Meta title="Navbar" component={Navbar} />

<Story name="Primary + Secondary Nav">
  <Layout>
    <Grid cols={[6, 6, 12]}>
      <GridItem colStart={[2, 3, 1]} colSpan={[4, 2, 2]} rowStart={[2, 2, 1]}>
        <Navbar isLarge={true}>
          <svelte:fragment slot="sub-nav">
            <Button variant="raised" icon="back" />
            <Button variant="raised" icon="menu" />
            <Button variant="raised" icon="next" />
          </svelte:fragment>
          <svelte:fragment slot="site-nav">
            <NavLink icon="hire" label="Hire" />
            <NavLink icon="work" label="Work" />
          </svelte:fragment>
        </Navbar>
      </GridItem>
    </Grid>
  </Layout>
</Story>
