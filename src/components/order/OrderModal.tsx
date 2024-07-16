import { useFoodStore } from '@/store/food/food-store'
import { Button, CardMedia } from '@mui/material'
import { OrderItem } from './OrderItem'

interface Props {
  handleClose: () => void
}

export const OrderModal = ({ handleClose }: Props) => {
  const foods = useFoodStore((state) => state.foods)

  return (
    <div className="fixed top-0 left-0 z-10 flex justify-center items-center w-screen h-screen">
      <div
        onClick={handleClose}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 overflow-hidden"
      />
      <div className="relative bg-white rounded-lg shadow p-1 sm:p-2 max-sm:mx-6 sm:w-[576px] 2xl:w-[672px] border border-gray-300">
        <div className="flex items-center justify-between border-b border-gray-300 p-2">
          <h3 className="text-xl font-semibold text-gray-900">Orden</h3>
          <button
            onClick={handleClose}
            type="button"
            className="hover:bg-gray-200 bg-gray-100 rounded-lg p-1"
          >
            <CardMedia
              component="img"
              height="50"
              image="/x.svg"
              alt="x img"
              className="size-5"
            />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="h-72 2xl:h-80 overflow-auto p-2">
          <ul className="space-y-2">
            {foods.map((item) => (
              <li key={item.food.id}>
                <OrderItem item={item} />
              </li>
            ))}
          </ul>
          {foods.length === 0 && (
            <p className="text-base sm:text-lg font-medium text-gray-500 px-2 sm:px-40 text-center">
              Ningun plato seleccionado
            </p>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-gray-300 p-2">
          <p className="font-medium">
            Total: ${foods.reduce((accumulator, item) => accumulator + item.food.price * item.count, 0)}
          </p>
          <Button variant="outlined" color="inherit">
            Ordenar
          </Button>
        </div>
      </div>
    </div>
  )
}
