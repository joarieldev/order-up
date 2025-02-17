'use client'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { ITable } from '@/interfaces/table.interface'
import { login } from '@/actions/auth/login'
import { useRouter } from 'next/navigation'

interface Props {
  res: ITable[]
}
export const TableList = ({ res }: Props) => {
  const router = useRouter()

  const handleSignIn = async (table: ITable) => {
    const res = await login(table.credentials.user, table.credentials.password)

    if (res.ok) {
      router.push('/menu/foods')
    }
  }

  return (
    <>
      {res &&
        res.map((item) => (
          <Card
            key={item.id}
            sx={{ minWidth: 150 }}
            onClick={() => handleSignIn(item)}
          >
            <CardActionArea sx={{ display: "grid", placeItems: "center"}}>
              <CardMedia
                component="img"
                image="/mesa.webp"
                alt="mesa img"
                sx={{ height: "50px", width: "50px" }}
              />
              <CardContent>
                <Typography align="center" variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </>
  )
}
