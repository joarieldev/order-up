import { NavbarMobile } from '@/components/ui/navbar/NavbarMobile'
import { Sidebar } from '@/components/ui/sidebar/Sidebar'
import { SidebarMobile } from '@/components/ui/sidebar/SidebarMobile'

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="lg:bg-red-400">
      <NavbarMobile />
      <Sidebar />
      <SidebarMobile />
      <div className="p-2 sm:ml-60">
        <div className="p-4 border-2 border-gray-700 border-dashed rounded-lg">
          {children}
        </div>
      </div>
    </main>
  )
}
