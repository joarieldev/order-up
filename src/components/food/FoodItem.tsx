import { Food } from '@/interfaces/food.interface'
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
  food: Food
}

export const FoodItem = ({ food }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div className="h-40">
          <CardMedia
            component="img"
            height="50"
            image={`/foods/${food.image}`}
            alt={`${food.name} img`}
            className="size-full object-cover"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {food.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {food.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="grid grid-cols-3">
        <Button className="text-black font-medium text-lg">+</Button>
        <Typography variant="body1" align="center">0</Typography>
        <Button className="text-black font-medium text-lg">-</Button>
      </CardActions>
    </Card>
  )
}
