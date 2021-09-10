import sanityClient from '@sanity/client'

const isLocal = window?.location?.hostname === 'localhost'
const isPreview = window?.location?.hostname.splits('.').shift() === 'preview'

const client = sanityClient({
  projectId: '3wd8aqoe',
  dataset: 'production',
  apiVersion: '2021-04-04',
  useCdn: !isLocal && !isPreview,
  withCredentials: isLocal || isPreview,
})

export default client
