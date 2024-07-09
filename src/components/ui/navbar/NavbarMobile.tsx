'use client'

import { useSidebarStore } from '@/store/ui/sidebar-store'
import { Button } from '@mui/material'
import Image from 'next/image'

export const NavbarMobile = () => {
  const openSide = useSidebarStore((state) => state.openSidebar)

  return (
    <nav className="sm:hidden m-2 bg-white rounded-lg shadow-sm">
      <Button variant="text" className="m-1" onClick={openSide}>
        <span className="sr-only">Open sidebar</span>
        <Image
          src="/menu-deep.svg"
          height={100}
          width={100}
          alt="menu svg"
          className="size-6"
        />
      </Button>
    </nav>
  )
}
