import { getOrder } from '@/actions/order/get-order'
import { useOrderStore } from '@/store/order/order-store'
import { Button, CardMedia } from '@mui/material'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { IOrder } from '@/interfaces/order.interface'

interface Props {
  session: any
}
export const OrdersButton = ({ session }: Props) => {
  const [menu, setMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const order = useOrderStore((state) => state.order)
  const setOrderStore = useOrderStore((state) => state.setOrder)

  const handleAvatarBtn = () => {
    setMenu(!menu)
  }
  const handleGetOrder = async () => {
    const res = await getOrder(session.user.user)
    if (!res.ok) {
      console.log('Error al obtener la orden')
    }
    res.order?.map((item: IOrder) => {
      if (item.paid === false) setOrderStore(item)
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  useEffect(() => {
    handleGetOrder()
  }, [])
  return (
    <div ref={ref} className="rounded-full">
      <div className="flex">
        <Button
          onClick={handleAvatarBtn}
          className="text-gray-800"
          endIcon={
            <CardMedia
              component="img"
              height="50"
              image="/chevron-down.svg"
              alt="dish img"
              className="size-5"
            />
          }
        >
          <p className="flex">
            {order.length > 0 && (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
              </span>
            )}
            Ordenes
          </p>
        </Button>
      </div>
      <div
        className={clsx(
          'divide-y divide-gray-300 mt-2 right-2 text-sm p-1 min-w-36 rounded-md shadow border border-gray-300 bg-white max-h-48 overflow-auto',
          menu ? 'absolute' : 'hidden'
        )}
      >
        {order.length === 0 && (
          <ul className="py-1 text-sm text-gray-900">
            <li className="text-center">- Sin ordenes -</li>
          </ul>
        )}
        {order.map((item, index) => (
          <ul key={index + 1} className="py-1 text-sm text-gray-900 pl-2">
            <li className="font-medium">
              Orden {index + 1} - Total: ${item.total}
            </li>
            {
              item.foods.map((item, index) => (
                <li key={index} className="px-2 text-sm font-light">
                  <div className="flex">
                    <p className="w-40 truncate">{item.food.name}</p> x{item.count} ${item.food.price * item.count}
                  </div>
                </li>
              ))
            }
          </ul>
        ))}
      </div>
    </div>
  )
}
