import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import {
    SanityImageSource,
    SanityProjectDetails,
} from '@sanity/image-url/lib/types/types'

interface SanityConfig extends SanityProjectDetails {
    apiVersion: string
    useCdn: boolean
}

export const config: SanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    apiVersion: '2022-07-27',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source: SanityImageSource) =>
    createImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config)
