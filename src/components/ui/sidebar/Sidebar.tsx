'use client'

import { logout } from '@/actions/auth/logout'
import { mont_alter } from '@/config/fonts'
import { IMenu } from '@/interfaces/menu.interface'
import { useFoodStore } from '@/store/food/food-store'
import { useOrderStore } from '@/store/order/order-store'
import { Button, CardMedia } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  menu: IMenu[]
  session: any
}
export const Sidebar = ({ menu, session }: Props) => {
  const pathName = usePathname()
  const removeAllOrder = useOrderStore((state) => state.removeAllOrder)
  const removeAllFood = useFoodStore((state) => state.removeAllFood)

  return (
    <>
      <aside className="fixed top-0 left-0 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 p-2 bg-white">
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto rounded-lg shadow-md border border-gray-300">
          <div className="flex justify-center mb-5 py-1">
            <Link
              href={'/menu/foods'}
              className="inline-flex items-center gap-2"
            >
              <Image
                src="/soup.svg"
                height={100}
                width={100}
                alt="order-up logo"
                className="size-6 sm:size-7"
              />
              <h1
                className={clsx(' text-xl font-semibold', mont_alter.className)}
              >
                OrderUp
              </h1>
            </Link>
          </div>
          <div className="flex grow justify-between flex-col space-y-1">
            <ul className="space-y-2 font-medium">
              {menu.map((item) => (
                <li key={item.id}>
                  <Button
                    fullWidth
                    className={clsx(
                      'p-0 text-pink-950 rounded-lg hover:bg-pink-50',
                      { 'bg-pink-50': item.path === pathName }
                    )}
                  >
                    <Link
                      href={item.path}
                      className="inline-flex items-center justify-between w-full p-2"
                    >
                      <span>{item.food}</span>
                      <CardMedia
                        component="img"
                        height="50"
                        image={`/${item.icon}`}
                        alt={item.food}
                        className="size-5"
                      />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="h-full w-full flex grow rounded-md" />
            <Button
              fullWidth
              className="flex items-center justify-between text-pink-950 rounded-lg hover:bg-pink-50"
              onClick={() => {removeAllOrder();removeAllFood();logout()}}
            >
              <span className="text-base">{session.user.user}</span>
              <span className="inline-flex gap-1 items-center">
                Salir
                <CardMedia
                  component="img"
                  height="50"
                  image="/logout-2.svg"
                  alt="dish img"
                  className="size-5"
                />
              </span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
