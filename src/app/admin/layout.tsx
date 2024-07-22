import { auth } from '@/auth.config'
import { NavbarAdmin } from '@/components/ui/navbar/NavbarAdmin'
import { IUser } from '@/interfaces/user.interface'
import { redirect } from 'next/navigation'

export default async function AminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  if ((session?.user as IUser)?.role !== 'admin') {
    redirect('/auth/login')
  }

  return (
    <main className="flex flex-col items-center">
      <NavbarAdmin session={session} />
      <section className="p-2 w-full max-w-screen-lg">{children}</section>
    </main>
  )
}
