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
      <section className="p-2 sm:ml-60 min-h-[90vh] sm:min-h-screen flex items-center justify-center">
        <div>
          {children}
        </div>
      </section>
    </main>
  )
}
