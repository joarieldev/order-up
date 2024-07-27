import { IFoodCount } from './food.interface'

export interface IOrders {
  table: string
  order: IOrder[]
}

export interface IOrder {
  foods: IFoodCount[]
  total: number
  paid: boolean
}
