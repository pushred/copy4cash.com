<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import FeaturedProjects from './FeaturedProjects.svelte'
</script>

<Meta
  title="FeaturedProjects"
  component={FeaturedProjects}
  parameters={{ layout: 'centered' }}
/>

<Story name="Example">
  <FeaturedProjects
    data={[
      {
        name: 'Mice Love it to Death',
        client: 'd-CON',
      },
      {
        name: '#ThatSongWhen',
        client: 'Spotify',
      },
      {
        name: 'Frenemies',
        client: 'Coke zero',
      },
      {
        name: 'You Don’t Know zero `Til You’ve Tried It',
        client: 'Coke zero',
      },
      {
        name: 'Hydrate the Hustle',
        client: 'vitaminwater',
      },
      {
        name: 'Live Generously',
        client: 'BJ’s',
      },
      {
        name: '#QuiTips',
        client: 'Nicorette',
      },
      {
        name: 'BTS Like a Pro',
        client: 'Staples',
      },
      {
        name: 'More than a Card',
        client: 'Amex',
      },
      {
        name: 'Print Ain’t Dead',
        client: 'Lines',
      },
    ]}
  />
</Story>
