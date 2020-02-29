//export type beer = { // works too
export interface beer {
  id: number
  name: string
  image_url: string
}

export type beers = beer[]