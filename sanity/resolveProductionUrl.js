const PREVIEW_HOST = 'https://preview.copy4cash.com'

export default function resolveProductionUrl(document) {
  if (document._type === 'hire') return `${PREVIEW_HOST}/hire`
  return `${PREVIEW_HOST}/${document.slug.current}`
}
