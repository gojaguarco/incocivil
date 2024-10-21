import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { pagesType } from './pagesType'
import { buttonType } from './buttonType'
import { heroSectionType, servicesSectionType } from './homeType'
import { surfaceType, surfaceTypesType } from './surfacesTypes'
import { secondaryServiceType, serviceType } from './servicesTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, pagesType, buttonType, heroSectionType, servicesSectionType, surfaceTypesType, surfaceType, serviceType, secondaryServiceType],
}
