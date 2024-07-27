import { useFoodCount } from '@/hooks/useFoodCount'
import { IFoodCount } from '@/interfaces/food.interface'
import { Button, ButtonGroup, CardMedia } from '@mui/material'

interface Props {
  item: IFoodCount
}
export const OrderItem = ({ item }: Props) => {
  const { handleMore, handleLess, handleDelete } = useFoodCount(item.food)

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 sm:h-12">
          <CardMedia
            component="img"
            height="50"
            image={`/foods/${item.food.image}`}
            alt={`${item.food.name} img`}
            className="size-full object-cover rounded-md"
          />
        </div>
        <p className="w-44 truncate">{item.food.name}</p>
        <p>{item.count}x</p>
        <p className="font-medium">${item.food.price * item.count}</p>
      </div>
      <div className="flex items-center max-sm:justify-end gap-1">
        <ButtonGroup size="small" color="inherit">
          <Button onClick={handleMore}>+</Button>
          <Button onClick={handleLess}>-</Button>
        </ButtonGroup>
        <Button
          onClick={handleDelete}
          className="text-red-900 font-medium text-sm sm:text-base"
        >
          Eliminar
        </Button>
      </div>
    </div>
  )
}
