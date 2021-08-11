#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

import { basename, extname, join, relative, resolve } from 'path'
import { URL } from 'url'

import cheerio from 'cheerio'
import { camelCase, upperFirst } from 'lodash-es'
import prettier from 'prettier'

const modulePath = new URL(import.meta.url).pathname
const moduleFilename = modulePath.split('/').pop()
const dirname = modulePath.replace(moduleFilename, '')

const ARTWORK_PATH = resolve(dirname, '..', 'artwork')

function generateComponent({ html, name }) {
  const filepath = `${join(outputPath, name)}.svelte`

  if (existsSync(filepath)) {
    const updatedHtml = updateComponent({ filepath, html })
    writeFileSync(filepath, updatedHtml)
  } else {
    const formattedHtml = prettier.format(html, { filepath })
    writeFileSync(filepath, formattedHtml)
  }
}

function updateComponent({ filepath, html }) {
  const src = readFileSync(filepath, 'utf-8')
  const $ = cheerio.load(src)
  const $script = $('script')
  const $style = $('style')

  let updatedHtml = html.replace('<g>', '<g bind:this={g}>')

  if ($script.length) {
    updatedHtml += `<script>${$script.html()}</script>`
  }

  if ($style.length) {
    updatedHtml += `<style>${$style.html()}</style>`
  }

  return prettier.format(updatedHtml || html, { filepath })
}

function generateIndex({ output, outputPath }) {
  const exports = output.map(
    ([id]) => `export { default as ${id} } from './${id}.svelte'`
  )

  const indexFilePath = `${join(outputPath, 'index')}.js`
  writeFileSync(indexFilePath, exports.join('\n'))
}

function transformExportedArtwork({ group, output }) {
  const $group = $(group)
  const componentName = upperFirst(camelCase($group.attr('id')))

  $group.removeAttr('id')
  $group.find('g').remove()
  $group.find('path').removeAttr('id')

  output.push([componentName, $.html($group)])
}

const args = process.argv.slice(2)
const filename = args[0]

if (!filename) throw new Error('Must specify filename as an argument')

const filePath = join(ARTWORK_PATH, filename)
const artworkName = basename(filename, extname(filename))
const outputPath = resolve(dirname, '..', 'src', 'components', artworkName)
const relativeOutputPath = relative(process.cwd(), outputPath)
const svg = readFileSync(filePath, 'utf-8')
const $ = cheerio.load(svg)

if (!existsSync(outputPath)) mkdirSync(outputPath)

const output = []

$('g')
  .first() // omit outer export group
  .find('g')
  .each((index, group) => transformExportedArtwork({ group, output }))

generateIndex({ output, outputPath })
output.forEach(([name, html]) => generateComponent({ html, name }))

console.log(`✔ ${output.length} components saved to ${relativeOutputPath}`)
