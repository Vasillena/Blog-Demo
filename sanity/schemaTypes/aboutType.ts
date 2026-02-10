import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'nameField',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nameText',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ageField',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ageText',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locationField',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locationText',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutBody',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'storyBody',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'button',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
