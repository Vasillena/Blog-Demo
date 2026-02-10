import {Rule} from 'sanity'

export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'user',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'desc',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'createdAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
