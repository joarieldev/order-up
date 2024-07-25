'use client'

import { Button } from '@mui/material'
import Link from 'next/link'
import { LogoutBtn } from './LogoutBtn'
import clsx from 'clsx'
import { mont_alter } from '@/config/fonts'
import Image from 'next/image'
import { MenuBtn } from './MenuBtn'
import { useEffect, useState } from 'react'
import { IOrders } from '@/interfaces/order.interface'
import { getOrders } from '@/actions/order/get-orders'
import { useIsPaidStore } from '@/store/order/is-paid-store'

interface Props {
  session: any
}
export const NavbarAdmin = ({ session }: Props) => {
  const [menu, setMenu] = useState(false)
  const isPaid = useIsPaidStore((state) => state.isPaid)
  const noPaid = useIsPaidStore((state) => state.noPaid)

  const handleGetOrders = async () => {
    const res = await getOrders()
    if (!res.ok) {
      console.log('Error al obtener las ordenes')
    }
    res.orders?.map((item: IOrders) => {
      item.order.map((item) => {
        if (item.paid === false) return noPaid()
      })
    })
  }

  useEffect(() => {
    handleGetOrders()
  }, [])

  return (
    <nav className="flex justify-between p-2 w-full max-w-screen-lg z-10 sticky top-0 bg-white border-b border-gray-300">
      <Link
        href={'/admin/profits'}
        className="inline-flex items-center gap-2"
        onClick={() => setMenu(false)}
      >
        <Image
          src="/soup.svg"
          height={100}
          width={100}
          alt="order-up logo"
          className="size-6 sm:size-7"
        />
        <h1
          className={clsx(
            'txt-lg sm:text-xl font-semibold',
            mont_alter.className
          )}
        >
          OrderUp
        </h1>
      </Link>

      <div className="inline-flex gap-2">
        <Button className="text-gray-900 p-0 max-sm:hidden">
          <Link href={'/admin/collect'} className="px-2">
            <p className="flex">
              Cobros
              {!isPaid && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
                </span>
              )}
            </p>
          </Link>
        </Button>
        <LogoutBtn session={session} />
        <MenuBtn session={session} menu={menu} setMenu={setMenu} />
      </div>
    </nav>
  )
}
