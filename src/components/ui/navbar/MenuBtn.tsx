import { logout } from '@/actions/auth/logout'
import { Button, CardMedia } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  session: any
  menu: boolean
  setMenu: (valor: boolean) => void
}
export const MenuBtn = ({ session, menu, setMenu }: Props) => {

  return (
    <div className="sm:hidden">
      {!menu && (
        <Button onClick={() => setMenu(true)}>
          <span className="sr-only">Open menu</span>
          <Image
            src="/menu-deep.svg"
            height={100}
            width={100}
            alt="menu svg"
            className="size-6"
          />
        </Button>
      )}
      {menu && (
        <Button onClick={() => setMenu(false)}>
          <span className="sr-only">Open menu</span>
          <Image
            src="/x.svg"
            height={100}
            width={100}
            alt="menu svg"
            className="size-6"
          />
        </Button>
      )}
      <div
        className={clsx(
          'p-2 bg-white h-[calc(100vh-44px)] overflow-auto left-0 right-0 mt-0',
          menu ? 'absolute' : 'hidden'
        )}
      >
        <ul className="py-1 text-sm text-gray-900">
          <li>
            <Button
              className="text-gray-900 w-full p-0"
              onClick={() => setMenu(false)}
            >
              <Link href={'/admin/collect'} className="p-2 w-full">
                Cobros
              </Link>
            </Button>
          </li>
          <li>
            <Button className="text-gray-900 w-full" onClick={() => logout()}>
              Salir
            </Button>
          </li>
        </ul>
        <p className="inline-flex items-center gap-1">
          <CardMedia
            component="img"
            height="50"
            image="/user-circle.svg"
            alt="user img"
            className="size-5"
          />
          {session.user.user}
        </p>
      </div>
    </div>
  )
}
