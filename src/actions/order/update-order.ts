import { IOrder, IOrders } from '@/interfaces/order.interface'

export const updateOrder = async (table: string) => {
  try {
    // TODO - obtener los datos de la BD

    const store = window.localStorage.getItem('order-up')
    let message = 'Orden no actualizada'

    if (store) {
      const storeArray = JSON.parse(store)
      let orders = storeArray.orders as IOrders[]
  
      const results = orders.find((item) => item.table === table)

      if (results) {
        orders.map((item) => {
          if (item.table === table) {
            item.order.map((item) => {
              item.paid = true
            })
            message = 'Orden actualizada'
            return
          }
        })
      }

      const save = {
        orders: [...orders],
      }
      window.localStorage.setItem('order-up', JSON.stringify(save))
    }

    return { ok: true , message }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No se pudo enviar la orden',
    }
  }
}
