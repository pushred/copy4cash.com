import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { CurrencyDollar, TextT } from 'phosphor-react'

const PREVIEW_HOST = 'https://preview.copy4cash.com'

const Preview = (props) => {
  const document = props.document.draft || props.document.published

  const previewUrl = [
    PREVIEW_HOST,
    document._type === 'hire' && 'hire',
    document._type === 'project' && document.slug?.current,
  ]
    .filter(Boolean)
    .join('/')

  return (
    <iframe
      style={{ width: '100%', height: '100%', border: 0 }}
      src={previewUrl}
    ></iframe>
  )
}

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view.component(Preview).title('Preview'),
  ])
}

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['hire', 'stylized-text'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Hire')
        .icon(CurrencyDollar)
        .child(
          S.document()
            .title('Hire')
            .schemaType('hire')
            .documentId('hire')
            .views([S.view.form(), S.view.component(Preview).title('Preview')])
        ),
      S.listItem()
        .title('Stylized Text')
        .icon(TextT)
        .child(
          S.document()
            .title('Stylized Text')
            .schemaType('stylized-text')
            .documentId('stylized-text')
            .views([S.view.form()])
        ),
    ])
