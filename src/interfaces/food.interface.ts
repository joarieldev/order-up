export interface IFood {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface IFoodCount {
  food: IFood
  count: number
}