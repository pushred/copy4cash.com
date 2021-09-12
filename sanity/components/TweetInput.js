import React, { useCallback, useEffect, useState } from 'react'
import { useId } from '@reach/auto-id'
import { FormField } from '@sanity/base/components'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { Flex, Stack, TextArea } from '@sanity/ui'

export const TweetInput = React.forwardRef((props, ref) => {
  const {
    type,
    value = {
      embedHtml: '',
    },
    readOnly,
    placeholder,
    markers,
    presence,
    compareValue,
    onChange,
    onFocus,
    onBlur,
  } = props

  const [isTwitterLoaded, setTwitterLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://platform.twitter.com/widgets.js'

    script.addEventListener('load', () => {
      console.debug('Twitter widgets script loaded')
      setTwitterLoaded(true)
    })

    document.head.appendChild(script)
  }, [])

  const inputId = useId()
  const [embedHtml, setEmbedHtml] = useState(value.embedHtml || '')

  useEffect(() => {
    if (isTwitterLoaded && typeof twttr?.widgets?.load === 'function') {
      twttr.widgets.load()
    }
  }, [embedHtml, isTwitterLoaded])

  const handleChange = useCallback(
    (event) => {
      const inputValue = event.currentTarget.value
      setEmbedHtml(inputValue)

      const authorMatches = /\(@(.*)\)/.exec(inputValue)

      const quoteMatches = /<blockquote[^>]*>(.*)<\/blockquote>/.exec(
        inputValue
      )

      let author
      let quoteHtml

      if (author !== null && authorMatches?.length && authorMatches[1]) {
        author = authorMatches[1]
      }

      if (quoteHtml !== null && quoteMatches?.length && quoteMatches[1]) {
        quoteHtml = quoteMatches[1]
      }

      onChange(
        PatchEvent.from(
          set({
            author,
            quoteHtml,
            embedHtml: inputValue,
          })
        )
      )
    },
    [onChange]
  )

  return (
    <Stack space={3}>
      <Flex align="flex-end">
        <FormField
          description={type.description}
          title={type.title}
          __unstable_markers={markers}
          __unstable_presence={presence}
          compareValue={compareValue}
          inputId={inputId}
          flex={2}
          marginRight={4}
        >
          <TextArea
            id={inputId}
            value={embedHtml}
            readOnly={readOnly}
            placeholder={placeholder || 'Paste embed HTML'}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            flex={1}
            ref={ref}
          />
        </FormField>
      </Flex>
      {embedHtml && (
        <div
          style={{ visibility: 'hidden' }}
          dangerouslySetInnerHTML={{
            __html: embedHtml.replace(/<script.*<\/script>/, ''),
          }}
        />
      )}
    </Stack>
  )
})

export default TweetInput
