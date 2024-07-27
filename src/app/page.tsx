import { Navbar } from '@/components/ui/navbar/Navbar'
import { getTables } from '@/actions/table/get-tables'
import { Title } from '@/components/home/Title'
import { TableList } from '@/components/home/TableList'
import { auth } from '@/auth.config'
import { redirect } from 'next/navigation'
import { IUser } from '../interfaces/user.interface'

export default async function Home() {
  const res = await getTables()
  const session = await auth()

  if ((session?.user as IUser)?.role === 'client') {
    redirect('/menu/foods')
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <section className="flex flex-col justify-center items-center py-2 w-full max-w-screen-lg">
        <Title />
      </section>
      <section className="py-2 w-full max-w-screen-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 md:gap-4 py-5 md:p-10 justify-items-center">
          <TableList res={res} />
        </div>
      </section>
    </main>
  )
}
