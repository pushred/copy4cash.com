import React, { useCallback, useState } from 'react'
import { useId } from '@reach/auto-id'
import { FormField } from '@sanity/base/components'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { Button, Card, Flex, Spinner, Stack, TextInput } from '@sanity/ui'

function getVimeoId(url) {
  const cleanUrl = url.replace(/("|')/g, '')
  const parsedUrl = new URL(cleanUrl)
  return parsedUrl.pathname
    .split('/')
    .filter(Boolean)
    .find((segment) => !Number.isNaN(parseInt(segment, 16)))
}

function VimeoEmbed({ vimeoId, width, height }) {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}`}
      width={width}
      height={height}
      frameBorder="0"
    ></iframe>
  )
}

export const VimeoInput = React.forwardRef((props, ref) => {
  const {
    type,
    value = {
      url: '',
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

  const inputId = useId()
  const [error, setError] = useState(null)
  const [isFetching, setFetching] = useState(false)
  const [videoUrl, setVideoUrl] = useState(value.url)

  const handleChange = useCallback(
    (event) => {
      const inputValue = event.currentTarget.value
      setVideoUrl(inputValue)
    },
    [onChange]
  )

  const { vimeoId, width, height } = value

  const handleFetchVideo = async () => {
    if (isFetching) return

    try {
      setFetching(true)

      const vimeoId = getVimeoId(videoUrl)
      const normalizedUrl = `https://vimeo.com/${vimeoId}`
      const encodedUrl = encodeURIComponent(normalizedUrl)

      const response = await fetch(
        `https://vimeo.com/api/oembed.json?url=${encodedUrl}`
      )

      const data = await response.json()

      onChange(
        PatchEvent.from(
          set({
            description: data.description,
            height: data.height,
            title: data.title,
            url: normalizedUrl,
            vimeoId: data.video_id.toString(),
            width: data.width,
          })
        )
      )

      setError(null)
      setFetching(false)
      setVideoUrl(normalizedUrl)
    } catch (err) {
      console.error(err)
      setFetching(false)
      setError(err)
    }
  }

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
          <TextInput
            id={inputId}
            value={videoUrl}
            readOnly={readOnly}
            placeholder={placeholder || 'Enter a vimeo.com URL'}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            flex={1}
            ref={ref}
          />
        </FormField>
        <Button
          disabled={isFetching}
          text="Load"
          tone="primary"
          onClick={handleFetchVideo}
        />
      </Flex>
      {isFetching && <Spinner />}
      {error && (
        <Card tone="critical" marginTop={3} padding={3}>
          Something went wrong, please double check the Vimeo URL
        </Card>
      )}
      {vimeoId && (
        <VimeoEmbed vimeoId={vimeoId} width={width} height={height} />
      )}
    </Stack>
  )
})

export default VimeoInput
