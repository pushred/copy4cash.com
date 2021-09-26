export function overlayDrafts(documents) {
  return documents
    .reduce((accumulator, doc, index) => {
      if (doc === undefined || !doc._id || doc._id.startsWith('drafts')) {
        return accumulator
      }

      const draftDocIndex = documents.findIndex((maybeDraftDoc) => {
        if (
          maybeDraftDoc === undefined ||
          !maybeDraftDoc._id.startsWith('draft')
        ) {
          return false
        }

        return doc.slug?.current === maybeDraftDoc.slug?.current
      })

      if (draftDocIndex === -1) return accumulator

      accumulator[index] = accumulator[draftDocIndex]
      accumulator[draftDocIndex] = undefined

      return accumulator
    }, documents)
    .filter(Boolean)
}
