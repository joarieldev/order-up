'use client'

import { useFoodCount } from '@/hooks/useFoodCount'
import { IFood } from '@/interfaces/food.interface'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

interface Props {
  food: IFood
}

export const FoodItem = ({ food }: Props) => {
  const { handleMore, handleLess, count } = useFoodCount(food)

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
        {count() === 0 ? (
          <Typography variant="body2" align="center" color="text.secondary">
            Cantidad
          </Typography>
        ) : (
          <Typography variant="body1" align="center">
            {count()}
          </Typography>
        )}
        <Button onClick={handleLess} className="text-black font-medium text-lg">
          -
        </Button>
      </CardActions>
    </Card>
  )
}
