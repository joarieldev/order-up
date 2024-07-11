import { Button } from '@mui/material'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex justify-end p-2">
      <Link href={'/admin'}>
        <Button variant="outlined" color="inherit">
          Acceder
        </Button>
      </Link>
    </nav>
  )
}
