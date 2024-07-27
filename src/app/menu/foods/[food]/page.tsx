import { getFoodsByCategory } from '@/actions/foods/get-foods-by-category'
import { FoodList } from '../../../../components/food/FoodList';

interface Props {
  params: {
    food: string
  }
}

export default async function FoodByPage({ params }: Props) {
  const { food } = params
  const res = await getFoodsByCategory(food)

  return (
    <FoodList foods={res} />
  )
}
