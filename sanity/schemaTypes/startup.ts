import { UserIcon } from 'lucide-react'
import {defineField, defineType} from 'sanity'
import { author } from './author';

export const startup = defineType({
  name: 'startup',
  title: 'Startup',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
        name: 'title',
        type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    {
        name: 'author',
        type: 'reference',
        to: [{ type: 'author' }],
    },
    defineField({
      name: 'views',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'category',
        type: 'string',
        validation: (Rule) => Rule.min(1).max(20).required().error('Category is required and must be between 1 and 20 characters.'),
    }),
    defineField({
        name: 'image',
        type: 'url',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'pitch',
        type: 'markdown',
      }),
  ],
})