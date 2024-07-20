import { IOrder, IOrders } from '@/interfaces/order.interface'

export const setOrder = async (table: string, order: IOrder) => {
  try {
    // TODO - obtener los datos de la BD

    const store = window.localStorage.getItem('order-up')

    if (store) {
      const storeArray = JSON.parse(store)
      let orders = storeArray.orders as IOrders[]
  
      const results = orders.find((item) => item.table === table)

      if (results) {
        orders.map((item) => {
          if (item.table === table) {
            item.order.push(order)
            return
          }
        })
      } else {
        const newOrders = [...orders, {table,order:[order]}]
        orders = newOrders
      }

      const save = {
        orders: [...orders],
      }
      window.localStorage.setItem('order-up', JSON.stringify(save))
    } else {
      const save = {
        orders: [
          {
            table,
            order: [order],
          },
        ],
      }
      window.localStorage.setItem('order-up', JSON.stringify(save))
    }

    return { ok: true }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No se pudo enviar la orden',
    }
  }
}
