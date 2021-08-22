import { isPlainObject } from 'lodash-es'

import * as stores from './stores'

export const theme = {
  breakpoints: {
    sm: '0em',
    md: '40em', // 640px
    lg: '75em', // 1200px
  },
}

function getMediaQueryString(minWidth, maxWidth) {
  const minWidthQuery = `(min-width: ${minWidth})`
  if (!maxWidth) return minWidthQuery

  const maxWidthQuery = `(max-width: ${maxWidth})`
  return `${minWidthQuery} and ${maxWidthQuery}`
}

export function getMediaQueryStrings() {
  // based on Chakra UI implementation - https://git.io/JEUqk
  return Object.entries(theme.breakpoints)
    .sort((a, b) =>
      Number.parseInt(a[1], 10) > Number.parseInt(b[1], 10) ? 1 : -1
    )
    .map(([key, minWidth], index, sortedArray) => {
      const next = sortedArray[index + 1]
      const maxWidth = next ? next[1] : undefined
      const mediaQuery = getMediaQueryString(minWidth, maxWidth)

      return {
        key,
        mediaQuery,
      }
    })
}

export function getResponsivePropValues(breakpoint, props) {
  if (breakpoint === null) return props

  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      props[key] = value
    } else if (Array.isArray(value)) {
      props[key] = value[breakpoint.index]
    } else if (isPlainObject(value)) {
      props[key] = value[breakpoint.key]
    }
  })

  return props
}

export function onBreakpointChange(callback) {
  stores.breakpoint.subscribe(callback)
}
