import { IFoodCount } from '@/interfaces/food.interface'
import { create } from 'zustand'

interface State {
  foods: IFoodCount[]
  setFood: (data: IFoodCount) => void
  removeFood: (id: string, count: number) => void
  removeAllFood: () => void
}

export const useFoodStore = create<State>()((set) => ({
  foods: [],
  setFood: (data: IFoodCount) =>
    set((state) => ({
      foods: state.foods.find((item) => item.food.id === data.food.id)
        ? state.foods.map((item) => {
            if (item.food.id === data.food.id) {
              return {
                food: data.food,
                count: data.count,
              }
            }
            return item
          })
        : [...state.foods, data],
    })),
  removeFood: (id: string, count: number) =>
    set((state) => ({
      foods: state.foods.find((item) => item.food.id === id && count !== 0)
        ? state.foods.map((item) => {
            if (item.food.id === id) {
              return {
                food: item.food,
                count: count,
              }
            }
            return item
          })
        : state.foods.filter((item) => item.food.id !== id),
    })),
  removeAllFood: () => set((state) => ({ foods: [] })),
}))
