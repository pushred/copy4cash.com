<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { Carousel, Grid, GridItem } from '.'
</script>

<Meta title="Carousel" component={Carousel} />

<Story name="Images">
  <Grid>
    <GridItem colStart={5} colSpan={6}>
      <Carousel
        data={[
          {
            image: {
              description: 'Cat',
              url: 'https://placekitten.com/500/300',
            },
          },
          {
            image: {
              description: 'Cat',
              url: 'https://placekitten.com/600/400',
            },
          },
          {
            image: {
              description: 'Cat',
              url: 'https://placekitten.com/900/500',
            },
          },
        ]}
      />
    </GridItem>
  </Grid>
</Story>

<Story name="Videos">
  <Grid>
    <GridItem colStart={5} colSpan={6}>
      <Carousel
        data={[
          {
            video: {
              caption: 'Red = Nighttime Cravings',
              title: 'Nicorette - Christian’s #QuiTips',
              width: '100%',
              originalWidth: 426,
              originalHeight: 240,
              vimeoId: '334797164',
            },
          },
          {
            video: {
              caption: 'Blue = Midday Cravings',
              title: 'Nicorette - Linda’s #QuiTips',
              width: '100%',
              originalWidth: 426,
              originalHeight: 240,
              vimeoId: '334798302',
            },
          },
          {
            video: {
              caption: 'Green = Car Cravings',
              title: 'Nicorette - Gottam #QuiTips',
              width: '100%',
              originalWidth: 426,
              originalHeight: 240,
              vimeoId: '334799879',
            },
          },
          {
            video: {
              caption: 'Yellow = Mornings',
              title: 'Nicorette - Kelli #QuiTips',
              width: '100%',
              originalWidth: 426,
              originalHeight: 240,
              vimeoId: '334801168',
            },
          },
        ]}
      />
    </GridItem>
  </Grid>
</Story>

<Story name="Fullscreen Images">
  <Carousel
    variant="fullscreen"
    data={[
      {
        image: {
          description: 'Cat',
          url: 'https://placekitten.com/500/300',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'https://placekitten.com/600/400',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'https://placekitten.com/900/500',
        },
      },
    ]}
  />
</Story>

<Story name="Fullscreen Videos">
  <Carousel
    variant="fullscreen"
    data={[
      {
        caption: 'Red = Nighttime Cravings',
        video: {
          title: 'Nicorette - Christian’s #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334797164',
        },
      },
      {
        caption: 'Blue = Midday Cravings',
        video: {
          title: 'Nicorette - Linda’s #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334798302',
        },
      },
      {
        caption: 'Green = Car Cravings',
        video: {
          title: 'Nicorette - Gottam #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334799879',
        },
      },
      {
        caption: 'Yellow = Mornings',
        video: {
          title: 'Nicorette - Kelli #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334801168',
        },
      },
    ]}
  />
</Story>

<Story name="Start Index">
  <Carousel
    startIndex={1}
    variant="fullscreen"
    data={[
      {
        image: {
          description: 'Cat',
          url: 'https://placekitten.com/500/300',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'https://placekitten.com/600/400',
        },
      },
      {
        image: {
          description: 'Cat',
          url: 'https://placekitten.com/900/500',
        },
      },
    ]}
  />
</Story>
