import { create } from 'zustand'

interface State {
  isPaid: boolean
  yesPaid: () => void
  noPaid: () => void
}

export const useIsPaidStore = create<State>()((set) => ({
  isPaid: true,
  yesPaid: () => set({ isPaid: true }),
  noPaid: () => set({ isPaid: false }),
}))
