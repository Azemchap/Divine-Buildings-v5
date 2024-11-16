import { defineType, defineField } from 'sanity';

// Define schema fields separately
const nameField = defineField({
    name: "name",
    title: "Category Name",
    type: "string",
    validation: (Rule) => Rule.required().error('Category Name is required'),
});

const createdAtField = defineField({
    name: "createdAt",
    title: "Created At",
    type: "datetime",
    initialValue: () => new Date().toISOString(),
});

const slugField = defineField({
    name: "slug",
    title: "Category Slug",
    type: "slug",
    options: {
        source: "name",
        maxLength: 96,
    },
    validation: (Rule) => Rule.required().error('Slug is required'),
});

// Define the schema for the "Category" document
export const category = defineType({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        nameField,
        createdAtField,
        slugField,
    ],
});