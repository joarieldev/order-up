import { getOrders } from '@/actions/order/get-orders'
import { IOrders } from '@/interfaces/order.interface'
import { Alert, Button, CardMedia } from '@mui/material'
import { useEffect, useState } from 'react'
import { PopupFinish } from '../ui/popup-modal/PopupFinish'
import { useIsPaidStore } from '@/store/order/is-paid-store'

export const Profits = () => {
  const [cantOrder, setCantOrder] = useState(0)
  const [totalSales, setTotalSales] = useState(0)
  const [openPopup, setOpenPopup] = useState(false)
  const isPaid = useIsPaidStore((state) => state.isPaid)
  const [alert, setAlert] = useState(false)

  const fetchGetOrders = async () => {
    const resp = await getOrders()
    if (!resp.ok) {
      console.log('Error al obtener las ordenes')
    }
    console.log(resp.orders)
    let counterOrder = 0
    let counterSales = 0
    resp.orders?.map((item: IOrders) => {
      item.order.map((item) => {
        if (item.paid === true) {
          counterOrder++
          counterSales += item.total
        }
      })
    })
    setCantOrder(counterOrder)
    setTotalSales(counterSales)
  }
  const popup = (msg: boolean) => {
    if (!msg) {
      setOpenPopup(false)
      return
    }
    window.localStorage.removeItem('order-up')
    setCantOrder(0)
    setTotalSales(0)
    setOpenPopup(false)
  }

  useEffect(() => {
    fetchGetOrders()
  }, [])

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 p-4 ">
        <div className="divide-y divide-gray-300 border border-gray-300 shadow w-full sm:w-64">
          <h3 className="p-2 text-base font-medium text-center">
            Ventas total del dia
          </h3>
          <div className="flex flex-col gap-2 items-center p-2">
            <CardMedia
              component="img"
              height="50"
              image="/report-money.svg"
              alt="user img"
              className="size-16"
            />
            <p className="text-base">${totalSales}</p>
          </div>
        </div>
        <div className="divide-y divide-gray-300 border border-gray-300 shadow w-full sm:w-64">
          <h3 className="p-2 text-base font-medium text-center">
            Ordenes del dia
          </h3>
          <div className="flex flex-col gap-2 items-center p-2">
            <CardMedia
              component="img"
              height="50"
              image="/tools-kitchen-2.svg"
              alt="user img"
              className="size-16"
            />
            <p className="text-base">{cantOrder} Ordenes</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Button
          variant="outlined"
          onClick={() => (!isPaid ? setAlert(true) : setOpenPopup(true))}
        >
          Finalizar Dia
        </Button>
        {alert && (
          <div className="absolute bottom-0">
            <Alert severity="warning" onClose={() => setAlert(false)}>Hay ordenes sin cobrar.</Alert>
          </div>
        )}
      </div>
      {openPopup && <PopupFinish popup={popup} />}
    </>
  )
}
