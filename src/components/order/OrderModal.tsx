import { useFoodStore } from '@/store/food/food-store'
import {  Button, CardMedia } from '@mui/material'
import { OrderItem } from './OrderItem'
import { PopupModal } from '../ui/popup-modal/PopupModal'
import { useState } from 'react'
import { setOrder } from '@/actions/order/set-order'
import { IOrder } from '@/interfaces/order.interface'
import { BackdropOrder } from '../ui/backdrop/BackdropOrder'
import { useOrderStore } from '@/store/order/order-store'

interface Props {
  handleClose: () => void
  session: any
}

export const OrderModal = ({ handleClose, session }: Props) => {
  const foods = useFoodStore((state) => state.foods)
  const [openPopup, setOpenPopup] = useState(false)
  const removeAllFood = useFoodStore((state) => state.removeAllFood)
  const [backdrop, setBackdrop] = useState(false)
  const setOrderStore = useOrderStore((state) => state.setOrder)

  const popupModal = async (msg: boolean) => {
    if (!msg) {
      setOpenPopup(false)
      return
    }
    const auxOrder: IOrder = {
      foods: foods,
      total: foods.reduce(
        (accumulator, item) => accumulator + item.food.price * item.count,
        0
      ),
      paid: false,
    }
    const res = await setOrder(session.user.user, auxOrder)
    if (!res.ok) {
      console.log('Error al crear la orden')
    }
    setOrderStore(auxOrder)
    setBackdrop(true)
    removeAllFood()
    setOpenPopup(false)
    setTimeout(() => {
      setBackdrop(false)
      handleClose()
    },4000)
  }

  return (
    <div className="fixed top-0 left-0 z-10 flex justify-center items-center w-screen h-screen">
      <div
        onClick={handleClose}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 overflow-hidden"
      />
      <div className="relative bg-white rounded-lg shadow p-1 sm:p-2 max-sm:mx-6 w-full sm:w-[576px] 2xl:w-[672px] border border-gray-300">
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
            Total: $
            {foods.reduce(
              (accumulator, item) => accumulator + item.food.price * item.count,
              0
            )}
          </p>
          <Button
            onClick={() => setOpenPopup(true)}
            variant="outlined"
            color="inherit"
            disabled={foods.length === 0}
          >
            Ordenar
          </Button>
        </div>
      </div>
      {openPopup && <PopupModal popupModal={popupModal} />}
      {backdrop && <BackdropOrder />}
    </div>
  )
}
