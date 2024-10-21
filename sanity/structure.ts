import type { StructureResolver } from "sanity/structure";
import { pagesType } from "./schemaTypes/pagesType";
import { DocumentTextIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title(pagesType.title || "")
        .icon(pagesType.icon)
        .child(
          S.editor()
            .id(pagesType.name)
            .schemaType(pagesType.name)
            .documentId(pagesType.name)
            .title(pagesType.title || "")
        ),
      S.listItem()
        .title("Blogs")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Blogs")
            .items([
              S.documentTypeListItem("post").title("Publicaciones"),
              S.documentTypeListItem("category").title("Categorías"),
              S.documentTypeListItem("author").title("Autores"),
            ])
        ),
    ]);
