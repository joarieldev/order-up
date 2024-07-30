'use client'

import { getOrder } from '@/actions/order/get-order'
import { IOrder, IOrders } from '@/interfaces/order.interface'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { PopupPay } from '../ui/popup-modal/PopupPay'
import { updateOrder } from '@/actions/order/update-order'
import { useRouter } from 'next/navigation'
import { useIsPaidStore } from '@/store/order/is-paid-store'
import { getOrders } from '@/actions/order/get-orders'

interface Props {
  table: string
}
export const CollectOrder = ({ table }: Props) => {
  const [order, setOrder] = useState<IOrder[]>([])
  const [openPopup, setOpenPopup] = useState(false)
  const router = useRouter()
  const noPaid = useIsPaidStore((state) => state.noPaid)
  const yesPaid = useIsPaidStore((state) => state.yesPaid)

  const handleGetOrder = async () => {
    const res = await getOrder(table)
    if (!res.ok) {
      console.log('Error al obtener las ordenes')
    }
    const resFilter = res.order?.filter((item) => item.paid === false)
    setOrder(resFilter as IOrder[])
  }

  const popupPay = async (msg: boolean) => {
    if (!msg) {
      setOpenPopup(false)
      return
    }
    const res = await updateOrder(table)
    if (!res.ok) {
      console.log('Error al actualizar el estado de la orden')
    }

    handleGetOrders()
    setOpenPopup(false)
    router.push('/admin/collect')
  }
  const handleGetOrders = async () => {
    const resp = await getOrders()
    if (!resp.ok) {
      console.log('Error al obtener las ordenes')
    }
    let paid = 0
    resp.orders?.map((item: IOrders) => {
      const paidd = item.order.map((item) => {
        if (item.paid === false) {
          paid += 1
        }
      })
    })
    if (paid === 0) {
      yesPaid()
    } else {
      noPaid()
    }
  }

  useEffect(() => {
    handleGetOrder()
  }, [])

  return (
    <>
      {order.length === 0 && (
        <ul className="py-1 text-base text-gray-900">
          <li className="text-center">- Sin ordenes -</li>
        </ul>
      )}
      {order.length !== 0 && (
        <div className="divide-y divide-gray-300 flex flex-col gap-2">
          <div>
            {order.map((item, index) => (
              <ul key={index + 1} className="text-base text-gray-900">
                <li className="font-medium">Orden {index + 1}</li>
                {item.foods.map((item, index) => (
                  <li key={index} className="pl-2 text-base font-light">
                    <div className="flex flex-col sm:flex-row gap-x-2">
                      <p className="w-80 max-sm:w-60 truncate">
                        {item.food.name}
                      </p>
                      <div className="w-full flex flex-row justify-between">
                        <p className="w-48 max-sm:w-40 truncat text-left sm:text-center font-normal">
                          {item.food.category}
                        </p>
                        <p className="w-auto text-right">
                          x{item.count} ${item.food.price * item.count}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div>
            <p className="font-medium text-base w-full text-right py-2">
              Total: $
              {order.reduce((accumulator, item) => accumulator + item.total, 0)}
            </p>
            <Button
              variant="outlined"
              className="w-full"
              onClick={() => setOpenPopup(true)}
            >
              Confirmar Pago
            </Button>
          </div>
        </div>
      )}
      {openPopup && <PopupPay popupPay={popupPay} />}
    </>
  )
}
