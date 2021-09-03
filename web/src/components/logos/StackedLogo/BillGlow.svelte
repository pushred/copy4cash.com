<script>
  import { onMount } from 'svelte'

  import { animateNeon, DURATIONS, TIMELINE } from '../../animate'

  let g

  onMount(() => {
    animateNeon(g.querySelectorAll('path'), {
      delay: TIMELINE.bill + 500,
      duration: DURATIONS.glow,
      random: true,
    })
  })
</script>

<g bind:this={g}>
  <path
    d="M511.616 1104.39C510.888 1107.95 509 1111.17 506.247 1113.54C503.494 1115.91 500.032 1117.31 496.404 1117.5C492.776 1117.69 489.186 1116.68 486.197 1114.61C483.209 1112.54 480.99 1109.54 479.889 1106.08C478.788 1102.62 478.867 1098.89 480.113 1095.48C481.36 1092.06 483.703 1089.16 486.777 1087.22C489.85 1085.28 493.48 1084.42 497.096 1084.77C500.713 1085.11 504.113 1086.65 506.763 1089.13"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M674.413 1104.39C673.683 1107.95 671.794 1111.16 669.042 1113.52C666.291 1115.89 662.833 1117.28 659.21 1117.46C655.587 1117.65 652.003 1116.64 649.02 1114.57C646.037 1112.51 643.824 1109.51 642.727 1106.05C641.629 1102.59 641.71 1098.87 642.956 1095.46C644.202 1092.05 646.544 1089.16 649.613 1087.22C652.683 1085.29 656.307 1084.43 659.919 1084.77C663.53 1085.12 666.925 1086.65 669.571 1089.13"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M531.236 1182.26H420.165V1019.96H733.837V1182.26H615.352"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M443.503 1105.08V1076.77C447.9 1076.77 452.253 1075.9 456.315 1074.22C460.377 1072.54 464.068 1070.07 467.176 1066.96C470.285 1063.85 472.75 1060.16 474.432 1056.1C476.113 1052.03 476.978 1047.68 476.977 1043.28H545.572"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M476.977 1158.93C476.966 1150.05 473.435 1141.55 467.158 1135.28C460.882 1129.01 452.374 1125.49 443.503 1125.49"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M710.511 1097.96V1125.49C701.63 1125.49 693.113 1129.02 686.834 1135.3C680.554 1141.58 677.027 1150.09 677.027 1158.97H629.94"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M608.431 1043.28H677.026C677.026 1052.16 680.554 1060.68 686.833 1066.96C693.113 1073.24 701.63 1076.77 710.51 1076.77"
    stroke="white"
    stroke-width="3.05141"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>

<style>
  path {
    opacity: 0;
  }
</style>
