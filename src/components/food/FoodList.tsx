import { IFood } from '@/interfaces/food.interface'
import { FoodItem } from './FoodItem'

interface Props {
  foods: IFood[]
}
export const FoodList = ({ foods }: Props) => {
  return (
    <>
      {foods.length === 0 && (
        <div className="w-full p-4 text-center bg-white/50 rounded-lg shadow-sm sm:p-8 ">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 ">¡Oops!</h5>
          <p className="mb-5 text-base text-gray-600 sm:text-lg ">
            Los platos del menú no están disponibles en este momento.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-8">
        {foods.map((item) => (
          <FoodItem key={item.id} food={item} />
        ))}
      </div>
    </>
  )
}
