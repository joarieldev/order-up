'use client'

import { useFoodStore } from '@/store/food/food-store'
import { Badge, CardMedia, Fab } from '@mui/material'
import { useState } from 'react'
import { OrderModal } from './OrderModal'

interface Props {
  session: any
}
export const OrderButton = ({ session }: Props) => {
  const foods = useFoodStore((state) => state.foods)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className="fixed bottom-0 right-0 p-2 z-10 h-16">
        <div className="w-full h-full flex justify-between items-center">
          <Fab onClick={handleOpen} variant="extended" className="bg-white">
            <Badge badgeContent={foods.length} color="secondary" sx={{ mr: 2 }}>
              <CardMedia
                component="img"
                height="50"
                image="/tools-kitchen-2.svg"
                alt="dish img"
                className="size-5"
              />
            </Badge>
            Orden
          </Fab>
        </div>
      </div>
      {open && <OrderModal handleClose={handleClose} session={session} />}
    </>
  )
}
