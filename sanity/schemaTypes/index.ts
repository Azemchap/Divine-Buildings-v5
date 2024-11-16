import { type SchemaTypeDefinition } from 'sanity'
import { plans } from './plans'
import { ebook } from './e-book'
import { category } from './categories'
import { personalInfo } from './personalInfo'
import { video } from './video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [plans, ebook, category, personalInfo, video],
}
