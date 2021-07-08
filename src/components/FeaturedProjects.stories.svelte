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
      [
        {
          title: 'Mice Love it to Death',
          client: 'd-CON',
        },
        {
          title: '#ThatSongWhen',
          client: 'Spotify',
        },
        {
          title: 'Frenemies',
          client: 'Coke zero',
        },
      ],
      [
        {
          title: 'You Don’t Know zero `Til You’ve Tried It',
          client: 'Coke zero',
        },
      ],
      [
        {
          title: 'Hydrate the Hustle',
          client: 'vitaminwater',
        },
        {
          title: 'Live Generously',
          client: 'BJ’s',
        },
        {
          title: '#QuiTips',
          client: 'Nicorette',
        },
      ],
      [
        {
          title: 'BTS Like a Pro',
          client: 'Staples',
        },
        {
          title: 'More than a Card',
          client: 'Amex',
        },
        {
          title: 'Print Ain’t Dead',
          client: 'Lines',
        },
      ],
    ]}
  />
</Story>
