'use client'

import { getOrder } from '@/actions/order/get-order'
import { IOrder } from '@/interfaces/order.interface'
import { ITable } from '@/interfaces/table.interface'
import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  table: ITable
}
export const CollectItem = ({ table }: Props) => {
  const [order, setOrder] = useState<IOrder[]>([])

  const handleGetOrder = async () => {
    const tableUser = table.name.replace(' ', '')
    const res = await getOrder(tableUser)
    if (!res.ok) {
      console.log('Error al obtener la orden')
    }
    const resFilter = res.order?.filter((item) => item.paid === false)
    setOrder(resFilter as IOrder[])
  }
  useEffect(() => {
    handleGetOrder()
  }, [])

  return (
    <Link href={`/admin/collect/${table.slug}`}>
      <Card sx={{ minWidth: 150 }}>
        <CardActionArea className="flex flex-col items-center relative">
          <CardMedia
            component="img"
            height="50"
            image="/mesa.webp"
            alt="mesa img"
            className="size-20"
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              {table.name}
            </Typography>
          </CardContent>
          {order.length > 0 && (
            <Badge
              badgeContent={order.length}
              color="secondary"
              className="absolute top-4 right-4"
            >
              <CardMedia
                component="img"
                height="50"
                image="/tools-kitchen-2.svg"
                alt="tools img"
                className="size-5"
              />
            </Badge>
          )}
        </CardActionArea>
      </Card>
    </Link>
  )
}
