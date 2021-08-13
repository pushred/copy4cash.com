<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import { Carousel, Grid, GridItem } from '.'
</script>

<Meta title="Carousel" component={Carousel} />

<!-- TODO: fetch data from Sanity -->
<Story name="Images">
  <Grid>
    <GridItem colStart={5} colSpan={6}>
      <Carousel />
    </GridItem>
  </Grid>
</Story>

<Story name="Videos">
  <Grid>
    <GridItem colStart={5} colSpan={6}>
      <Carousel
        data={[
          {
            _type: 'video',
            video: {
              caption: 'Red = Nighttime Cravings',
              title: 'Nicorette - Christian’s #QuiTips',
              width: 426,
              height: 240,
              vimeoId: '334797164',
            },
          },
          {
            _type: 'video',
            video: {
              caption: 'Blue = Midday Cravings',
              title: 'Nicorette - Linda’s #QuiTips',
              width: 426,
              height: 240,
              vimeoId: '334798302',
            },
          },
          {
            _type: 'video',
            video: {
              caption: 'Green = Car Cravings',
              title: 'Nicorette - Gottam #QuiTips',
              width: 426,
              height: 240,
              vimeoId: '334799879',
            },
          },
          {
            _type: 'video',
            video: {
              caption: 'Yellow = Mornings',
              title: 'Nicorette - Kelli #QuiTips',
              width: 426,
              height: 240,
              vimeoId: '334801168',
            },
          },
        ]}
      />
    </GridItem>
  </Grid>
</Story>

<Story name="Fullscreen Images">
  <Carousel variant="fullscreen" data={testImages} />
</Story>

<Story name="Fullscreen Videos">
  <Carousel
    variant="fullscreen"
    data={[
      {
        _type: 'video',
        caption: 'Red = Nighttime Cravings',
        video: {
          title: 'Nicorette - Christian’s #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334797164',
        },
      },
      {
        _type: 'video',
        caption: 'Blue = Midday Cravings',
        video: {
          title: 'Nicorette - Linda’s #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334798302',
        },
      },
      {
        _type: 'video',
        caption: 'Green = Car Cravings',
        video: {
          title: 'Nicorette - Gottam #QuiTips',
          width: 426,
          height: 240,
          vimeoId: '334799879',
        },
      },
      {
        _type: 'video',
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
