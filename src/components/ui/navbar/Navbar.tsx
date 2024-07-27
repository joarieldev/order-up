import { Button } from '@mui/material'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex justify-end p-2 w-full max-w-screen-lg">
      <Link href={'/admin/profits'}>
        <Button variant="outlined" color="inherit">
          Acceder
        </Button>
      </Link>
    </nav>
  )
}
