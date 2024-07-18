import { auth } from '@/auth.config'
import { LogoutBtn } from '@/components/ui/logout/LogoutBtn'
import { IUser } from '@/interfaces/user.interface'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await auth()

  if ((session?.user as IUser)?.role !== 'admin') {
    redirect('/auth/login')
  }

  return (
    <div>
      AdminPage
      <LogoutBtn />
    </div>
  )
}
