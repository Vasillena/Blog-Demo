// 'use client'

import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Blog Demo',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
