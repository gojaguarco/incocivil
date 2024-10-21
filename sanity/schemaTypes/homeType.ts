import { DesktopIcon, HomeIcon, PresentationIcon, WrenchIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";


export const heroSectionType = defineType({
		name: 'heroSection',
		title: 'Sección Principal (Hero)',
		type: 'document',
		fields: [
			defineField({
				name: 'simpleTitle',
				title: 'Título Principal',
				type: 'string',
				validation: (Rule) => Rule.required(),
			}),
			defineField({
				name: 'highlightedTitle',
				title: 'Título Resaltado',
				type: 'string',
				validation: (Rule) => Rule.required(),
			}),
			defineField({
				name: 'descriptionCard',
				title: 'Cuadro Descriptivo',
				type: 'object',
				fields: [
					defineField({
						name: 'descriptionTitle',
						title: 'Título',
						type: 'string',
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: 'projectNumber',
						title: 'Número de Proyectos',
						type: 'number',
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: 'descriptionText',
						title: 'Texto Descriptivo',
						type: 'text',
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: 'primaryButton',
						title: 'Botón Primario',
						type: 'button',
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: 'secondaryButton',
						title: 'Botón Secundario',
						type: 'button',
						validation: (Rule) => Rule.required(),
					}),
				]
			}),
			defineField({
				name: 'expertiseCard',
				title: 'Cuadro de experiencia',
				type: 'object',
				fields: [
					defineField({
						name: 'title',
						title: 'Título',
						type: 'string',
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: 'description',
						title: 'Descripción',
						type: 'text',
						validation: (Rule) => Rule.required(),
					}),
					defineField({
						name: 'ctaButton',
						title: 'Botón',
						type: 'button',
						validation: (Rule) => Rule.required(),
					})
				]
			}),
		],
		preview: {
			select: {
				title: 'simpleTitle',
				subtitle: 'highlightedTitle',
			},
			prepare(selection) {
				const { title, subtitle } = selection;
				if (!title || !subtitle) {
					return {
						title: "Sin título",
						subtitle: "Sin subtítulo",
					};
				}
				return {
					title: `Hero`,
					subtitle: `${title} ${subtitle}`,
					media: PresentationIcon,
				};
			},
		},
})

export const servicesSectionType = defineType({
	name: 'servicesSection',
			title: 'Sección de Servicios',
			type: 'object',
			fields: [
				defineField({
					name: 'titleDescription',
					title: 'Descripción del Título',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'title',
					title: 'Título',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'sectionName',
					title: 'Nombre de Sección',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'description',
					title: 'Descripción',
					type: 'text',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'ctaButton',
					title: 'Botón de Acción',
					type: 'button',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'primarySurfaces',
					title: 'Tipos de Superficies Principales',
					type: 'array',
					of: [
						{type: 'surfaceTypes'}
					],
					validation: (Rule) => [
						Rule.min(4),
						Rule.max(4),
						Rule.required()
					]
				}),
				defineField({
					name: 'secondaryServices',
					title: 'Servicios Secundarios',
					type: 'array',
					of: [
						{type: 'secondaryService'}
					]
				}),
			],
			preview: {
				select: {
					title: 'sectionName',
					subtitle: 'title',
				},
				prepare(selection) {
					const { title, subtitle } = selection;
					if (!title || !subtitle) {
						return {
							title: "Sin título",
							subtitle: "Sin subtítulo",
						};
					}
					return {
						title: `${title}`,
						subtitle: `${subtitle}`,
						media: WrenchIcon,
					};
				},
			},
})
