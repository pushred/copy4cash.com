<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.frame,
      duration: DURATIONS.frames,
      random: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M1152.89 204.971L1208.39 5.98944H782.312L837.829 204.971"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M837.829 521.401L772.401 740.276H1218.3L1152.89 521.401"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1218.3 91.3312H1854.86L1843.8 144.943"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M81.6073 143.829L68.0798 91.3312H772.401"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M180.71 582.543L167.182 635.041H772.401"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M782.312 555.468H122.289C115.708 555.459 109.317 553.259 104.116 549.213C98.915 545.166 95.1986 539.502 93.5491 533.109L6.61638 195.78C5.86004 192.84 5.78431 189.765 6.395 186.791C7.00569 183.817 8.2866 181.023 10.1396 178.623C11.9925 176.223 14.3684 174.28 17.0851 172.944C19.8018 171.607 22.7872 170.913 25.8126 170.914H797.345"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1194.91 170.904H1902.21C1905.15 170.903 1908.06 171.56 1910.72 172.829C1913.38 174.097 1915.73 175.944 1917.59 178.236C1919.45 180.528 1920.77 183.207 1921.47 186.078C1922.17 188.95 1922.22 191.941 1921.62 194.835L1852.17 531.676C1850.79 538.398 1847.13 544.435 1841.83 548.769C1836.53 553.103 1829.9 555.469 1823.06 555.468H1200.1"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1327.32 555.618H1770.3C1815.33 555.618 1853.46 583.369 1867.42 626.318C1881.39 669.267 1866.98 714.266 1830.65 740.952L1648.84 879.399"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1600.02 811.792L1743.73 706.209C1797.48 667.795 1767.85 634.325 1730.15 634.325L1224.83 635.19"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1667.5 890.986L1728.54 929.002L1484.68 946.041L1575.32 718.185L1592.82 784.498"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M1728.54 929.002L1484.68 946.041L1575.32 718.185"
    stroke="#6A0BFF"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>

<style>
  path {
    opacity: 0;
  }
</style>
