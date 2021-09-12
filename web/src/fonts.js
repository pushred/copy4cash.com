export function loadFonts() {
  if (!document.fonts) return Promise.resolve()

  return Promise.all(
    [
      {
        family: 'Mallory Compact',
        style: 'normal',
        weight: '700',
        woff2Url:
          'https://use.typekit.net/af/dbe9c5/00000000000000003b9b3ce1/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3',
      },
      {
        family: 'Mallory MP',
        style: 'normal',
        weight: '400',
        woff2Url:
          'https://use.typekit.net/af/b407ce/00000000000000003b9b3cf9/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3',
      },
      {
        family: 'Mallory MP',
        style: 'italic',
        weight: '400',
        woff2Url:
          'https://use.typekit.net/af/caeb56/00000000000000003b9b3cfa/27/l?subset_id=2&fvd=i4&v=3',
      },
      {
        family: 'Mallory MP Compact',
        style: 'normal',
        weight: '400',
        woff2Url:
          'https://use.typekit.net/af/28480f/00000000000000003b9b3d03/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3',
      },
      {
        family: 'Mallory MP Compact',
        style: 'normal',
        weight: '700',
        woff2Url:
          'https://use.typekit.net/af/9c8a08/00000000000000003b9b3d07/27/l?subset_id=2&fvd=n7&v=3',
      },
    ].map(({ family, style, weight, woff2Url }) =>
      new FontFace(family, `url(${woff2Url}) format('woff2')`, {
        style,
        weight,
      }).load()
    )
  ).then((loadedFonts) =>
    loadedFonts.forEach((font) => document.fonts.add(font))
  )
}
