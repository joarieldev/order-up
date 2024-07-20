import { IOrder, IOrders } from '@/interfaces/order.interface'
import { create } from 'zustand'

interface State {
  order: IOrder[]
  setOrder: (order:IOrder) => void
  removeAllOrder: () => void
}

export const useOrderStore = create<State>()((set) => ({
  order: [],
  setOrder: (order:IOrder) =>
    set((state) => ({
      order: [...state.order, order ],
    })),
    removeAllOrder: () => set((state) => ({ order: [] })),
}))
