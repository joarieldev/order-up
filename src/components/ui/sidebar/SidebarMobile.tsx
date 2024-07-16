'use client'

import { mont_alter } from '@/config/fonts'
import { IMenu } from '@/interfaces/menu.interface'
import { useSidebarStore } from '@/store/ui/sidebar-store'
import { Button } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  menu: IMenu[]
}
export const SidebarMobile = ({ menu }:Props) => {
  const pathName = usePathname()
  const isSide = useSidebarStore((state) => state.isSidebarOpen)
  const closeSide = useSidebarStore((state) => state.closeSidebar)

  return (
    <>
      {isSide && (
        <div
          onClick={closeSide}
          className="fixed sm:hidden top-0 left-0 w-screen h-screen z-20 bg-black opacity-30"
        />
      )}
      <aside
        className={clsx(
          'fixed top-0 left-0 z-20 w-60 h-screen transition-transform -translate-x-full sm:hidden',
          {'translate-x-0': isSide}
        )}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <div className="flex justify-center mb-5 py-1">
            <Link onClick={closeSide} href={'/menu/foods'} className="inline-flex items-center gap-2">
              <Image
                src="/soup.svg"
                height={100}
                width={100}
                alt="order-up logo"
                className="size-6"
              />
              <h1 className={clsx('text-xl font-semibold', mont_alter.className)}>
                OrderUp
              </h1>
            </Link>
          </div>
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
                  <Link onClick={closeSide} href={item.path} className='flex items-center w-full p-2'>
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
