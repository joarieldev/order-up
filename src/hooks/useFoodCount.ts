import { IFood } from '@/interfaces/food.interface'
import { useFoodStore } from '@/store/food/food-store'

export const useFoodCount = (food: IFood) => {
  const foods = useFoodStore((state) => state.foods)
  const setFood = useFoodStore((state) => state.setFood)
  const removeFood = useFoodStore((state) => state.removeFood)

  const handleMore = () => {
    if (count() >= 0 && count() < 12) {
      setFood({ food, count: count() + 1 })
    }
  }
  const handleLess = () => {
    if (count() > 0) {
      removeFood(food.id, count() - 1)
    }
  }
  const count = () => {
    const result = foods.find((item) => item.food.id === food.id)
    return result?.count || 0
  }

  const handleDelete = () => {
    removeFood(food.id, 0)
  }

  return { handleMore, handleLess, count, handleDelete }
}
