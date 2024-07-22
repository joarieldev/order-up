import { logout } from '@/actions/auth/logout'
import { Button, CardMedia } from '@mui/material'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface Props {
  session: any
}
export const LogoutBtn = ({ session }: Props) => {
  const [menu, setMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleAvatarBtn = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="relative max-sm:hidden">
      <Button
        onClick={handleAvatarBtn}
        className="text-gray-800"
        startIcon={
          <CardMedia
            component="img"
            height="50"
            image="/user-circle.svg"
            alt="user img"
            className="size-5"
          />
        }
      >
        <p className="flex">{session.user.user}</p>
      </Button>
      <div
        className={clsx(
          'text-sm p-1 min-w-36 rounded-md shadow border border-gray-300 bg-white overflow-auto right-0 mt-2.5',
          menu ? 'absolute' : 'hidden'
        )}
      >
        <ul className="py-1 text-sm text-gray-900">
          <li>
            <Button
              className="text-gray-900 w-full"
              endIcon={
                <CardMedia
                  component="img"
                  height="50"
                  image="/logout-2.svg"
                  alt="dish img"
                  className="size-5"
                />
              }
              onClick={() => logout()}
            >
              Salir
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}
