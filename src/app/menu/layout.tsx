import { getMenu } from '@/actions/menu/get-menu'
import { auth } from '@/auth.config'
import { OrderButton } from '@/components/order/OrderButton'
import { OrderNavbar } from '@/components/order/OrderNavbar'
import { Sidebar } from '@/components/ui/sidebar/Sidebar'
import { SidebarMobile } from '@/components/ui/sidebar/SidebarMobile'
import { IUser } from '@/interfaces/user.interface'
import { redirect } from 'next/navigation'

export default async function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const res = await getMenu()
  const session = await auth()

  if ((session?.user as IUser)?.role !== 'client') {
    if ((session?.user as IUser)?.role === 'admin') redirect('/admin/profits')
    redirect('/')
  }

  return (
    <main>
      <Sidebar menu={res} session={session} />
      <SidebarMobile menu={res} session={session} />
      <OrderNavbar session={session}/>
      <section className="py-2 max-sm:pl-2 pr-2 sm:ml-60 pt-14 pb-16 min-h-screen flex flex-col items-center justify-center">
        <div>{children}</div>
      </section>
      <OrderButton session={session} />
    </main>
  )
}
