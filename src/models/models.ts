export interface Player {
  id: number
  firstName: string
  lastName: string
  imageUrl?: string
  categoryIds: [number]
}

export interface Category {
  id: number
  name: string
  description: string
  imageUrl?: string
}
