import { defineField, defineType } from "sanity";

export const buttonType = defineType({
    name: 'button',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Texto',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            options: {
                list: ['Primario', 'Claro', 'Oscuro']
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'size',
            title: 'Tamaño',
            type: 'string',
            options: {
                list: ['Pequeño', 'Mediano', 'Grande']
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ]
})