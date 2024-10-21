import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './blogTypes/categoryType'
import {postType} from './blogTypes/postType'
import {authorType} from './blogTypes/authorType'
import { pagesType } from './pagesType'
import { buttonType } from './buttonType'
import { surfaceType, surfaceTypesType } from './surfacesTypes'
import { secondaryServiceType, serviceType } from './servicesTypes'
import { ImageOrVideoSchema, imageSchema, videoSchema } from './generalSchemas'
import { heroSectionType } from './homeTypes/heroSectionType'
import { servicesSectionType } from './homeTypes/servicesSectionType'
import { whyusSectionType } from './homeTypes/whyusSectionType'
import { surfaceSliderSectionType } from './homeTypes/surfaceSliderSectionType'
import { faqSectionType } from './homeTypes/faqSectionType'
import { faqType } from './faqType'
import { contactSectionType } from './homeTypes/contactSectionType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, pagesType, buttonType, heroSectionType, servicesSectionType, surfaceTypesType, surfaceType, serviceType, secondaryServiceType, whyusSectionType, imageSchema, videoSchema, ImageOrVideoSchema, surfaceSliderSectionType, faqSectionType, faqType, contactSectionType],
}
