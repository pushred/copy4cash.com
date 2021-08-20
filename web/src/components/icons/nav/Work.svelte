<script>
  import { expoOut } from 'svelte/easing'
  import { draw } from 'svelte/transition'

  export let hover = false
</script>

<svg
  class:hover
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="Bill">
    <path
      class="bill"
      d="M13.6592 21.8419C13.5744 22.2569 13.3543 22.6319 13.0335 22.9083C12.7126 23.1848 12.3091 23.3469 11.8862 23.3694C11.4633 23.3919 11.0449 23.2734 10.6966 23.0326C10.3482 22.7917 10.0896 22.4421 9.96127 22.0385C9.83294 21.6349 9.84213 21.2002 9.98741 20.8024C10.1327 20.4046 10.4059 20.0662 10.7641 19.8403C11.1223 19.6144 11.5454 19.5138 11.9669 19.5541C12.3885 19.5944 12.7848 19.7735 13.0937 20.0633"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="bill"
      d="M32.6346 21.8419C32.5495 22.2561 32.3293 22.6304 32.0086 22.9061C31.6879 23.1818 31.2849 23.3433 30.8626 23.3654C30.4402 23.3875 30.0225 23.2688 29.6749 23.0281C29.3272 22.7873 29.0692 22.4381 28.9413 22.035C28.8134 21.6319 28.8228 21.1978 28.9681 20.8006C29.1133 20.4034 29.3862 20.0657 29.744 19.8402C30.1017 19.6148 30.5242 19.5143 30.9452 19.5547C31.3661 19.5951 31.7618 19.7739 32.0702 20.0632"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="bill"
      d="M15.9461 30.918H2.99998V12H39.5609V30.918H25.7506"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="bill"
      d="M5.72013 21.9216V18.6218C6.2326 18.6218 6.74005 18.5208 7.21349 18.3247C7.68694 18.1286 8.1171 17.8411 8.47942 17.4786C8.84174 17.1162 9.1291 16.6859 9.32511 16.2124C9.52111 15.7389 9.62192 15.2315 9.62177 14.719H17.6171"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="bill"
      d="M9.62177 28.1979C9.62053 27.164 9.20891 26.1728 8.47735 25.4421C7.74578 24.7114 6.7541 24.301 5.72013 24.301"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="bill"
      d="M36.8419 21.0925V24.3009C35.8068 24.3009 34.8141 24.7121 34.0822 25.444C33.3503 26.176 32.9391 27.1686 32.9391 28.2037H27.4508"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="bill"
      d="M24.9438 14.719H32.9391C32.9391 15.7541 33.3503 16.7468 34.0822 17.4787C34.8141 18.2106 35.8068 18.6218 36.8419 18.6218"
      stroke="#00FF8B"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g id="Bill Glow">
      <path
        class="glow"
        d="M13.6592 21.8419C13.5744 22.2569 13.3543 22.6319 13.0335 22.9083C12.7126 23.1848 12.3091 23.3469 11.8862 23.3694C11.4633 23.3919 11.0449 23.2734 10.6966 23.0326C10.3482 22.7917 10.0896 22.4421 9.96127 22.0385C9.83294 21.6349 9.84213 21.2002 9.98741 20.8024C10.1327 20.4046 10.4059 20.0662 10.7641 19.8403C11.1223 19.6144 11.5454 19.5138 11.9669 19.5541C12.3885 19.5944 12.7848 19.7735 13.0937 20.0633"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="glow"
        d="M32.6346 21.8419C32.5495 22.2561 32.3293 22.6304 32.0086 22.9061C31.6879 23.1818 31.2849 23.3433 30.8626 23.3654C30.4402 23.3875 30.0225 23.2688 29.6749 23.0281C29.3272 22.7873 29.0692 22.4381 28.9413 22.035C28.8134 21.6319 28.8228 21.1978 28.9681 20.8006C29.1133 20.4034 29.3862 20.0657 29.744 19.8402C30.1017 19.6148 30.5242 19.5143 30.9452 19.5547C31.3661 19.5951 31.7618 19.7739 32.0702 20.0632"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="glow"
        d="M15.9461 30.918H2.99998V12H39.5609V30.918H25.7506"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="glow"
        d="M5.72013 21.9216V18.6218C6.2326 18.6218 6.74005 18.5208 7.21349 18.3247C7.68694 18.1286 8.1171 17.8411 8.47942 17.4786C8.84174 17.1162 9.1291 16.6859 9.32511 16.2124C9.52111 15.7389 9.62192 15.2315 9.62177 14.719H17.6171"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="glow"
        d="M9.62177 28.1979C9.62053 27.164 9.20891 26.1728 8.47735 25.4421C7.74578 24.7114 6.7541 24.301 5.72013 24.301"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="glow"
        d="M36.8419 21.0925V24.3009C35.8068 24.3009 34.8141 24.7121 34.0822 25.444C33.3503 26.176 32.9391 27.1686 32.9391 28.2037H27.4508"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="glow"
        d="M24.9438 14.719H32.9391C32.9391 15.7541 33.3503 16.7468 34.0822 17.4787C34.8141 18.2106 35.8068 18.6218 36.8419 18.6218"
        stroke="white"
        stroke-width="0.351478"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </g>
  {#if hover}
    <g id="Stack">
      <path
        in:draw={{ duration: 1000, delay: 100, easing: expoOut }}
        d="M5.83723 33.7541H41.5773C41.7947 33.7541 42.0031 33.6677 42.1569 33.514C42.3106 33.3603 42.3969 33.1518 42.3969 32.9344V14.8361"
        stroke="#00FF8B"
        stroke-width="1.17159"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        in:draw={{ duration: 1000, delay: 100, easing: expoOut }}
        d="M8.43909 36.3618H43.0093C43.5373 36.3618 44.0436 36.1521 44.4169 35.7788C44.7903 35.4055 45 34.8991 45 34.3712V17.4379"
        stroke="#00FF8B"
        stroke-width="1.17159"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="Stack Glow">
        <path
          in:draw={{ duration: 1000, delay: 1100, easing: expoOut }}
          d="M5.83723 33.7541H41.5773C41.7947 33.7541 42.0031 33.6677 42.1569 33.514C42.3106 33.3603 42.3969 33.1518 42.3969 32.9344V14.8361"
          stroke="white"
          stroke-width="0.351478"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          in:draw={{ duration: 1000, delay: 1000, easing: expoOut }}
          d="M8.43909 36.3618H43.0093C43.5373 36.3618 44.0436 36.1521 44.4169 35.7788C44.7903 35.4055 45 34.8991 45 34.3712V17.4379"
          stroke="white"
          stroke-width="0.351478"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  {/if}
  <g id="Nib">
    <path
      class="nib"
      d="M19.1382 28.8068L16.1651 24.0129C17.9286 21.5539 19.3782 18.4438 20.6581 14.9965C20.6811 14.9568 20.7166 14.9258 20.7591 14.9083C20.8015 14.8908 20.8486 14.8878 20.8929 14.8999C20.9373 14.9119 20.9764 14.9382 21.0042 14.9747C21.032 15.0113 21.047 15.056 21.0468 15.1019V24.1394"
      stroke="#FFB32C"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="nib"
      d="M22.9555 28.8068L25.9286 24.0129C24.5702 21.8958 23.8747 20.5129 23.0901 18.0996"
      stroke="#FFB32C"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="nib"
      d="M19.0211 30.918H23.0901"
      stroke="#FFB32C"
      stroke-width="1.17159"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {#if hover}
      <g id="Nib Glow">
        <path
          in:draw={{ duration: 1000, delay: 100, easing: expoOut }}
          d="M19.1382 28.8068L16.1651 24.0129C17.9286 21.5539 19.3782 18.4438 20.6581 14.9965C20.6811 14.9568 20.7166 14.9258 20.7591 14.9083C20.8015 14.8908 20.8486 14.8878 20.8929 14.8999C20.9373 14.9119 20.9764 14.9382 21.0042 14.9747C21.032 15.0113 21.047 15.056 21.0468 15.1019V24.1394"
          stroke="#FFB32C"
          stroke-width="1.17159"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          in:draw={{ duration: 1000, delay: 100, easing: expoOut }}
          d="M22.9555 28.8068L25.9286 24.0129C24.5702 21.8958 23.8747 20.5129 23.0901 18.0996"
          stroke="#FFB32C"
          stroke-width="1.17159"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          in:draw={{ duration: 1000, delay: 100, easing: expoOut }}
          d="M19.0211 30.918H23.0901"
          stroke="#FFB32C"
          stroke-width="1.17159"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          in:draw={{ duration: 1000, delay: 1000, easing: expoOut }}
          d="M19.1382 28.8068L16.1651 24.0129C17.9286 21.5539 19.3782 18.4438 20.6581 14.9965C20.6811 14.9568 20.7166 14.9258 20.7591 14.9083C20.8015 14.8908 20.8486 14.8878 20.8929 14.8999C20.9373 14.9119 20.9764 14.9382 21.0042 14.9747C21.032 15.0113 21.047 15.056 21.0468 15.1019V24.1394"
          stroke="white"
          stroke-width="0.351478"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          in:draw={{ duration: 1000, delay: 1000, easing: expoOut }}
          d="M22.9555 28.8068L25.9286 24.0129C24.5702 21.8958 23.8747 20.5129 23.0901 18.0996"
          stroke="white"
          stroke-width="0.351478"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          in:draw={{ duration: 1000, delay: 1000, easing: expoOut }}
          d="M19.0211 30.918H23.0901"
          stroke="white"
          stroke-width="0.351478"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    {/if}
  </g>
</svg>

<style>
  .bill,
  .nib,
  .glow {
    stroke: var(--faded-purple);
    transition: var(--fill-transition);
  }

  .hover .bill {
    stroke: #00ff8b;
  }

  .hover .glow {
    stroke: #fff;
  }
</style>
