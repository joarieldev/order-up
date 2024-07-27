import { IMenu } from '@/interfaces/menu.interface'
import { INews } from '@/interfaces/news.interface'
import { Button, Card, CardActionArea, CardMedia } from '@mui/material'
import Link from 'next/link'

interface Props {
  res: IMenu[]
  news: INews[]
}
export default function FoodInicio({ res, news }: Props) {
  const promo = news.filter((item) => item.type === 'promociones');
  const noved = news.filter((item) => item.type === 'novedades');
  return (
    <div className="max-sm:px-2">
      <h3 className="text-lg font-medium">Hola, ¿Qué vas a pedir hoy?</h3>
      <div className="inline-flex flex-wrap gap-2 pb-4 pt-2">
        {res.map((item) => (
          <Card key={item.id} sx={{ backgroundColor: item.color }}>
            <CardActionArea>
              <Link
                href={item.path}
                className="flex flex-col items-center justify-between w-28 p-2 gap-2"
              >
                <CardMedia
                  component="img"
                  height="50"
                  image={`/${item.icon}`}
                  alt={item.food}
                  className="size-10"
                />
                <span className="text-base font-normal">{item.food}</span>
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <h3 className="text-lg font-medium">No te pierdas estas promociones</h3>
      <div className="pb-4 pt-2">
        <ul className="inline-flex flex-wrap gap-2">
          {
            promo.map((item)=>(
              <li className="p-2 border border-gray-300 w-full sm:w-80 2xl:w-96 flex flex-row items-center justify-center rounded-md" key={item.id}>
                <div className="w-7/12">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
                <div className="w-5/12">
                  <CardMedia
                    component="img"
                    height="50"
                    image={`/foods/${item.image}`}
                    alt={item.title}
                    className="h-36 w-72 object-center"
                  />
                </div>
              </li>
            ))
          }
          </ul>
      </div>
      <h3 className="text-lg font-medium">Proxima semana nuevos platos</h3>
      <div className="pb-4 pt-2">
        <ul className="inline-flex flex-wrap gap-2">
          {
            noved.map((item)=>(
              <li className="border border-gray-300 w-full sm:w-80 2xl:w-96 flex flex-col rounded-md" key={item.id}>
                <div className="h-32 w-full">
                  <CardMedia
                    component="img"
                    height="50"
                    image={`/foods/${item.image}`}
                    alt={item.title}
                    className="size-full object-center"
                  />
                </div>
                  <p className="p-2 text-base font-light text-left">{item.title}</p>
              </li>
            ))
          }
          </ul>
      </div>
    </div>
  )
}
