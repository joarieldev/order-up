import { IOrders } from '@/interfaces/order.interface'

export const getOrders = async () => {
  try {
    // TODO - obtener los datos de la BD

    const store = window.localStorage.getItem('order-up')
    let orders: IOrders[] = []
    if (store) {
      const storeArray = JSON.parse(store)
      orders = storeArray.orders as IOrders[]
    }

    return { ok: true, orders }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No se pudo solicitar las ordenes',
    }
  }
}
