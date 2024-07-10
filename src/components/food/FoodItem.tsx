'use client'

import { IFood } from '@/interfaces/food.interface'
import { useFoodStore } from '@/store/food/food-store'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
  food: IFood
}

export const FoodItem = ({ food }: Props) => {
  const [quantity, setQuantity] = useState(0)
  const foods = useFoodStore((state) => state.foods)
  const setFood = useFoodStore((state) => state.setFood)
  const removeFood = useFoodStore((state) => state.removeFood)

  const handleMore = () => {
    if (quantity >= 0 && quantity < 12) {
      setQuantity(quantity + 1)
      setFood({ food, count: quantity + 1 })
    }
  }
  const handleLess = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      removeFood(food.id, quantity - 1)
    }
  }

  useEffect(() => {
    const result = foods.find((item) => item.food.id === food.id)
    if (result) setQuantity(result.count)
  }, [])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleMore}>
        <div className="h-40">
          <CardMedia
            component="img"
            height="50"
            image={`/foods/${food.image}`}
            alt={`${food.name} img`}
            className="size-full object-cover"
          />
        </div>
        <CardContent className="py-2">
          <Typography gutterBottom variant="h6" component="div">
            {food.name}
          </Typography>
          <div className="flex justify-between">
            <Typography variant="body2" color="text.secondary">
              {food.description}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              ${food.price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="grid grid-cols-3">
        <Button onClick={handleMore} className="text-black font-medium text-lg">
          +
        </Button>
        {quantity === 0 ? (
          <Typography variant="body2" align="center" color="text.secondary">
            Cantidad
          </Typography>
        ) : (
          <Typography variant="body1" align="center">
            {quantity}
          </Typography>
        )}
        <Button onClick={handleLess} className="text-black font-medium text-lg">
          -
        </Button>
      </CardActions>
    </Card>
  )
}
