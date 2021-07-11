import { shuffle } from 'lodash-es'

export const DURATIONS = {
  frames: 500,
  arrows: 500,
  cash: 500,
  copy: 500,
  four: 500,
  bling: 500,
  glow: 3000,
}

export const TIMELINE = {
  frame: 500,

  topLeftArrows: 2000,
  topRightArrows: 2000,
  bottomLeftArrows: 2000,
  bottomRightArrows: 2000,

  cashFrame: 1500,
  copyFrame: 1500,
  fourFrame: 2000 + DURATIONS.arrows,

  copy: 3000,
  four: 4000,
  cash: 5000,

  bling: 6000,
}

export function animateNeon(
  parts,
  {
    delay = 0,
    direction = 'normal',
    duration = 500,
    iterations = 1,
    random = false,
    stagger = false,
  }
) {
  let partsArray = Array.from(parts)
  if (random) partsArray = shuffle(partsArray)
  if (direction === 'reverse') partsArray = partsArray.reverse()

  partsArray.forEach((part, index) => {
    part.animate([{ opacity: 0 }, { opacity: 1 }], {
      iterations,
      delay: stagger ? delay + index * 200 : delay,
      duration,
      fill: 'forwards',
    })
  })
}

export function flickerNeon(parts, { delay = 0, random = false }) {
  let partsArray = Array.from(parts)
  if (random) partsArray = shuffle(partsArray)

  function flicker(part) {
    part.animate(
      [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }, { opacity: 1 }],
      {
        delay,
        iterations: 1,
        duration: 200,
        fill: 'forwards',
      }
    )
  }

  if (random) {
    flicker(partsArray[0])
  } else {
    partsArray.forEach(flicker)
  }
}
