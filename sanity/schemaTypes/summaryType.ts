import {defineField, defineType} from 'sanity'

export const summaryType = defineType({
  name: 'summary',
  title: 'Summary',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заглавие',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body1',
      title: 'Въведение',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body2',
      title: 'Описание',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'expenses',
      title: 'Разходи',
      type: 'array',
      of: [{type: 'expenseItem'}],
    }),
  ],
})
