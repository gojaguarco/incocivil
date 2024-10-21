import { defineField } from "sanity";

export const imageSchema = defineField({
  name: "mainImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (Rule) => Rule.required(),
    },
  ],
  validation: (Rule) => Rule.required(),
});
