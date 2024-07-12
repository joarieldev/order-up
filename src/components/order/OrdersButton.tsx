import { Button, CardMedia } from '@mui/material'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

export const OrdersButton = () => {
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
    <div ref={ref} className="rounded-full">
      <Button
        onClick={handleAvatarBtn}
        className="text-gray-800"
        endIcon={
          <CardMedia
            component="img"
            height="50"
            image="/chevron-down.svg"
            alt="dish img"
            className="size-5"
          />
        }
      >
        Ordenes
      </Button>
      <div
        className={clsx(
          'divide-y divide-gray-300 mt-2 right-2 text-sm p-1 min-w-36 rounded-md shadow border border-gray-300 bg-white max-h-48 overflow-auto',
          menu ? 'absolute' : 'hidden'
        )}
      >
        <ul className="py-1 text-sm text-gray-900">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
        <ul className="py-1 text-sm text-gray-900">
          <li>Item1</li>
        </ul>
      </div>
    </div>
  )
}
