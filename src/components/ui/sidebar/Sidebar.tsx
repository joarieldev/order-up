'use client'

import { mont_alter } from '@/config/fonts'
import { menu_data } from '@/mock/order-up/menu'
import { Button } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
  const pathName = usePathname()

  return (
    <>
      <aside className="fixed top-0 left-0 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 p-2 bg-white">
        <div className="h-full px-3 py-4 overflow-y-auto rounded-lg shadow-md border border-gray-300">
          <div className="flex justify-center mb-5 py-1">
            <Link href={'/menu/foods'} className="inline-flex items-center gap-2">
              <Image
                src="/soup.svg"
                height={100}
                width={100}
                alt="order-up logo"
                className="size-6 sm:size-7"
              />
              <h1 className={clsx(' text-xl font-semibold', mont_alter.className)}>
                OrderUp
              </h1>
            </Link>
          </div>
          <ul className="space-y-2 font-medium">
            {menu_data.map((item) => (
              <li key={item.id}>
                <Button
                  fullWidth
                  className={clsx(
                    'p-0 text-pink-950 rounded-lg hover:bg-pink-50',
                    { 'bg-pink-50': item.path === pathName }
                  )}
                >
                  <Link href={item.path} className='flex items-center w-full p-2'>
                    <span>{item.food}</span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
