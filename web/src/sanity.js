import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '3wd8aqoe',
  dataset: 'production',
  apiVersion: '2021-04-04',
  useCdn: false,
  withCredentials: true,
  // unauthenticated for now
})

export default client
