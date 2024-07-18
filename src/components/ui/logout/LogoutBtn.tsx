'use client'

import { logout } from "@/actions/auth/logout"
import { Button } from "@mui/material"

export const LogoutBtn = () => {
  return (
    <Button onClick={() => logout()}>Salir</Button>
  )
}
