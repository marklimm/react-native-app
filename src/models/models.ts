export enum CategoryId {
  REBOUNDERS_ID,
  SIXTIES_ID,
  FLOOR_GENERALS_ID,
  ROLE_PLAYERS_ID,
  CRAZY_ID,
}

export interface Category {
  id: CategoryId
  name: string
  description: string
  imageUrl?: string
}

export interface Player {
  id: number
  firstName: string
  lastName: string
  imageUrl?: string
  oneLiner?: string
  careerBio?: string
  categories: CategoryId[]
}
