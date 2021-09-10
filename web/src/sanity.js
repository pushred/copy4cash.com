import sanityClient from '@sanity/client'

export function getSanityClient(host = '') {
  const isLocal = host.startsWith('localhost')
  const isPreview = host.split('.').shift() === 'preview'

  return sanityClient({
    projectId: '3wd8aqoe',
    dataset: 'production',
    apiVersion: '2021-04-04',
    useCdn: !isLocal && !isPreview,
    withCredentials: isLocal || isPreview,
  })
}
