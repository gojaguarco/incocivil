import { DesktopIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pagesType = defineType({
  name: "pages",
  title: "Páginas",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({
      name: "homePage",
      title: "Home",
      type: "array",
      of: [{ type: "heroSection" }, { type: "servicesSection" }],

      validation: (Rule) => Rule.custom((content) => {
          // Verifica si el contenido existe

          // Crear un objeto para contar cuántos elementos hay de cada tipo
          //@ts-ignore
          const typeCounts = content.reduce((acc, item) => {
            //@ts-ignore
            const itemType = item._type;
            //@ts-ignore
            acc[itemType] = (acc[itemType] || 0) + 1;
            return acc;
          }, {});

          // Crear un array para almacenar los paths de los tipos duplicados
          //@ts-ignore
          const duplicatePaths = content
            .map((item, index) => {
              //@ts-ignore
              const itemType = item._type;
              // Si hay más de 1 elemento de este tipo, lo añadimos al array de duplicados
              //@ts-ignore
              if (typeCounts[itemType] > 1) {
                return [index]; // El índice del elemento duplicado
              }
              return null;
            })
            .filter(Boolean); // Filtra los null (elementos que no están duplicados)

          // Si no hay duplicados, retorna true
          return duplicatePaths.length === 0
            ? true
            : {
                message: "Solo puede haber una sección de cada tipo. Por favor elimine las duplicadas.",
              };
        }),
    }),
  ],
});