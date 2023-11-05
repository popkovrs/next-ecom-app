import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '7bmokkc6',
  dataset: 'production',
  apiVersion: '2021-10-21', 
  useCdn: true, 
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}