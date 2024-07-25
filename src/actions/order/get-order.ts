import { IOrder, IOrders } from '@/interfaces/order.interface'

export const getOrder = async (table: string) => {
  try {
    // TODO - obtener los datos de la BD

    const store = window.localStorage.getItem('order-up')
    let order: IOrder[] = []
    if (store) {
      const storeArray = JSON.parse(store)
      let orders = storeArray.orders as IOrders[]
  
      const results = orders.find((item) => item.table === table)

      if (results) {
        order=results.order
      }
    }

    return { ok: true, order }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No se pudo solicitar la orden',
    }
  }
}
