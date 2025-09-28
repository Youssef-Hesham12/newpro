export interface Icategory {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}

export interface allCategories {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
export type allCategory = Icategory[];