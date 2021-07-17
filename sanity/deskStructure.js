import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

const Preview = ({ document }) => (
  <iframe
    style={{ width: '100%', height: '100%', border: 0 }}
    src="http://localhost:3000"
  ></iframe>
)

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view.component(Preview).title('Preview'),
  ])
}

export default () => S.list().title('Content').items(S.documentTypeListItems())
