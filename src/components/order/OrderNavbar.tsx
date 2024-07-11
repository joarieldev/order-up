'use client'

import { useFoodStore } from '@/store/food/food-store'
import { useSidebarStore } from '@/store/ui/sidebar-store'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'

export const OrderNavbar = () => {
  const openSide = useSidebarStore((state) => state.openSidebar)
  const foods = useFoodStore((state) => state.foods)

  return (
    <nav className="fixed left-0 sm:left-60 right-0 top-0 py-2 max-sm:pl-2 pr-2 z-10 h-14 bg-white">
      <div className="border border-gray-300 rounded-lg shadow-sm w-full h-full p-1 flex justify-between items-center">
        <div>
          <Button className="sm:hidden" onClick={openSide}>
            <span className="sr-only">Open sidebar</span>
            <Image
              src="/menu-deep.svg"
              height={100}
              width={100}
              alt="menu svg"
              className="size-6"
            />
          </Button>
        </div>
        <p className="text-green-700 font-medium text-lg">
          ${foods.reduce((accumulator, item) => accumulator + item.food.price * item.count, 0)}
        </p>
        <div>
          {/* ordenes */}
        </div>
      </div>
    </nav>
  )
}
