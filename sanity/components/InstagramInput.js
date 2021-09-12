import React, { useCallback, useEffect, useState } from 'react'
import { useId } from '@reach/auto-id'
import { FormField } from '@sanity/base/components'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { Flex, Stack, TextArea } from '@sanity/ui'

export const InstagramInput = React.forwardRef((props, ref) => {
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

  const [isInstagramLoaded, setInstagramLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = '//www.instagram.com/embed.js'

    script.addEventListener('load', () => {
      console.debug('Instagram embeds script loaded')
      setInstagramLoaded(true)
    })

    document.head.appendChild(script)
  }, [])

  const inputId = useId()
  const [embedHtml, setEmbedHtml] = useState(value.embedHtml || '')

  useEffect(() => {
    if (isInstagramLoaded && typeof instgrm?.Embeds?.process === 'function') {
      instgrm.Embeds.process()
    }
  }, [embedHtml, isInstagramLoaded])

  const handleChange = useCallback(
    (event) => {
      const inputValue = event.currentTarget.value
      setEmbedHtml(inputValue.replace(/<script.*<\/script>/, ''))

      const authorMatches = /\(@(.*)\)/.exec(inputValue)
      let author

      if (author !== null && authorMatches?.length && authorMatches[1]) {
        author = authorMatches[1]
      }

      onChange(
        PatchEvent.from(
          set({
            author,
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
          dangerouslySetInnerHTML={{
            __html: embedHtml.replace(/<script.*<\/script>/, ''),
          }}
        />
      )}
    </Stack>
  )
})

export default InstagramInput
