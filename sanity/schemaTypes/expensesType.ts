import {defineField, defineType} from 'sanity'

export const expenseType = defineType({
  name: 'expenseItem',
  title: 'Expense Item',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена (лв)',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
  ],
})
