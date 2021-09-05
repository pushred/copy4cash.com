import netlifyAdapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: netlifyAdapter(),
    target: '#svelte',
  },
}

export default config
