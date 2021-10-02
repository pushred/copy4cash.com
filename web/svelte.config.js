import staticAdapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: staticAdapter({
      fallback: '404.html',
    }),
  },
}

export default config
