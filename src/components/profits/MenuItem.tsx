import { getFoodsByCategory } from '@/actions/foods/get-foods-by-category'
import { IFood } from '@/interfaces/food.interface'
import { AccordionDetails } from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
  foodCategory: string
}
export const MenuItem = ({ foodCategory }: Props) => {
  const [foods, setFoods] = useState<IFood[]>([])

  const fetchFoodsByCategory = async () => {
    const res = await getFoodsByCategory(foodCategory.toLowerCase())
    setFoods(res)
  }
  useEffect(() => {
    fetchFoodsByCategory()
  }, [])
  return (
    <AccordionDetails>
      <ul className="list-disc">
        {foods.map((item) => (
          <li key={item.id} className="flex items-center justify-center gap-2 py-1 ">
            <p className="w-44 sm:w-96 truncate">{item.name}</p>
            <p className="w-28 truncate font-medium text-right">${item.price}</p>
          </li>
        ))}
      </ul>
    </AccordionDetails>
  )
}
