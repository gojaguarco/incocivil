import { defineField, defineType } from "sanity";
import { imageSchema } from "./generalSchemas";


export const surfaceTypesType = defineType({
    name: 'surfaceTypes',
    title: 'Tipos de Superficies',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nombre de la Superficie',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción de la Superficie',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        }),
        imageSchema,
    ]
})

export const surfaceType = defineType({
    name: 'surface',
    title: 'Superficie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nombre',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
        imageSchema,
        defineField({
            name: 'type',
            title: 'Tipo de Superficie',
            type: 'reference',
            to: {type: 'surfaceTypes'},
        })
    ]
})