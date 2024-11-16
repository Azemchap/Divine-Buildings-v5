import { defineField, defineType } from 'sanity';

// Define schema fields separately
const nameField = defineField({
    name: "name",
    type: "string",
    title: "Title",
    validation: (Rule) => Rule.required().error('Required'),
});

const slugField = defineField({
    name: "slug",
    type: "slug",
    title: "Slug",
    options: {
        source: "name",
        maxLength: 96,
    },
});

const descriptionField = defineField({
    name: "description",
    title: "Description",
    type: "text",
    validation: (Rule) =>
        Rule.required()
            .error('Required')
            .max(200)
            .warning('Description should be under 200 characters.'),
});

const categoryField = defineField({
    name: 'category',
    title: "Category (you can select multiple)",
    type: 'array',
    of: [{ type: "reference", to: [{ type: 'category' }] }],
    validation: (Rule) => Rule.required().error('Required'),
});

const priceField = defineField({
    name: "price",
    title: "Price",
    type: "number",
    validation: (Rule) => Rule.required().error('Required'),
});

const ratingField = defineField({
    name: "rating",
    title: "Rating",
    type: "number",
    validation: (Rule) =>
        Rule.required()
            .integer() // Ensure the value is an integer
            .min(1)    // Minimum value of 1
            .max(5)    // Maximum value of 5
            .error('Rating must be an integer between 1 and 5.'),
});

const numReviewField = defineField({
    name: "numReview",
    title: "Reviews",
    type: "number",
    validation: (Rule) => Rule.required().error('Required'),
});

const createdAtField = defineField({
    name: "createdAt",
    title: "Created At",
    type: "datetime",
    initialValue: () => new Date().toISOString(),
});

const imagesField = defineField({
    name: 'images',
    title: 'Images',
    type: 'array',
    of: [{ type: 'image' }],
    options: {
        layout: 'grid',
    },
});

const bodyField = defineField({
    name: "body",
    title: "Content",
    type: "array",
    of: [
        { type: "block" },
        {
            type: 'image',
            fields: [{ type: 'text', name: 'alt', title: 'Alt' }],
        },
    ],
    validation: (Rule) => Rule.required().error('Required'),
});

// Define the schema for the "Plans" document
export const plans = defineType({
    name: "plan",
    title: "Plans",
    type: "document",
    fields: [ 
        nameField,
        slugField,
        descriptionField,
        categoryField,
        priceField,
        ratingField,
        numReviewField,
        createdAtField,
        imagesField,
        bodyField,
    ],
});