import { OrderButton } from '@/components/order/OrderButton'
import { OrderNavbar } from '@/components/order/OrderNavbar'
import { Sidebar } from '@/components/ui/sidebar/Sidebar'
import { SidebarMobile } from '@/components/ui/sidebar/SidebarMobile'

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Sidebar />
      <SidebarMobile />
      <OrderNavbar/>
      <section className="py-2 max-sm:pl-2 pr-2 sm:ml-60 pt-14 pb-16 min-h-screen flex flex-col items-center justify-center">
        <div>
          {children}
        </div>
      </section>
      <OrderButton/>
    </main>
  )
}
