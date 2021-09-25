#!/usr/bin/env node

const { nanoid } = require('nanoid')
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '3wd8aqoe',
  dataset: 'production',
  apiVersion: '2021-04-04',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  withCredentials: true,
})

const groq = require('groq')

const isDryRun = process.argv.includes('--dry-run')

const TYPES = ['carousel', 'gallery']

const fetchDocuments = () => {
  const query = groq`
    *[_type == 'project'] {
      _id,
      page[]
    }
  `

  return client.fetch(query)
}

const buildPatches = (docs) =>
  docs.reduce((patches, doc) => {
    const blockIndicies = doc.page.reduce((accumulator, block, index) => {
      if (!TYPES.includes(block._type)) return accumulator
      accumulator.push(index)
      return accumulator
    }, [])

    blockIndicies.forEach((index) => {
      const block = doc.page[index]
      const imageArrayField = block._type === 'gallery' ? 'images' : 'slides'

      block[imageArrayField].forEach((image, imageIndex) => {
        if (image._type === 'accessible-image') return

        patches.push({
          id: doc._id,
          patch: {
            insert: {
              replace: `page[${index}].${imageArrayField}[${imageIndex}]`,
              items: [
                {
                  _key: nanoid(),
                  _type: 'accessible-image',
                  image,
                  description: 'Description goes here',
                },
              ],
            },
            // this will cause the transaction to fail if the documents has been
            // modified since it was fetched.
            ifRevisionID: doc._rev,
          },
        })
      })
    })

    return patches
  }, [])

const createTransaction = (patches) =>
  patches.reduce(
    (tx, patch) => tx.patch(patch.id, patch.patch),
    client.transaction()
  )

const commitTransaction = (tx) => tx.commit()

const migrate = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)

  if (isDryRun) {
    if (patches.length === 0) return
    console.dir(patches, { depth: null, maxArrayLength: null })
    console.log(
      `Prepared ${patches.length} patches, remove \`--dry-run\` flag to proceed`
    )
    return
  }

  console.log('Migrating…')

  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return Promise.resolve(patches.length)
}

migrate()
  .then((count) =>
    count > 0
      ? console.log(`✓ ${count} patches successfully applied`)
      : console.log(`✓ nothing left to migrate`)
  )
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
