export function overlayDrafts(documents) {
  return documents.filter((item) => {
    return !documents.some((doc) => doc._id === `drafts.${item._id}`)
  })
}
