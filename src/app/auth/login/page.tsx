'use client'

import { authenticate } from '@/actions/auth/login'
import { Alert, Button, Checkbox, Input } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, dispatch] = useFormState(authenticate, undefined)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  useEffect(() => {
    if (state === 'Success') {
      window.location.replace('/admin')
    }
  }, [state])

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="relative bg-white rounded-lg shadow max-sm:m-2 p-4 w-full max-w-md max-h-full border border-gray-300">
        <div className="flex justify-center p-4 md:p-5 border-b">
          <h3 className="text-xl font-semibold text-gray-900 ">
            Inicia sesión
          </h3>
        </div>
        <div className="p-4 md:p-5">
          <form className="space-y-4" action={dispatch}>
            <div>
              <label
                htmlFor="user"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Usuario
              </label>
              <Input
                id="user"
                name="user"
                type="text"
                placeholder="Juan, William"
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contraseña
              </label>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full"
              />
            </div>
            <div className="flex items-center">
              <Checkbox id="mostrar" onClick={handleClickShowPassword} />
              <label
                htmlFor="mostrar"
                className="ms-1 text-sm font-medium text-gray-900 "
              >
                Mostrar Contraseña
              </label>
            </div>
            <Button type="submit" variant="contained" className="w-full">
              Iniciar
            </Button>
          </form>
          <div className="flex justify-center">
            <Link
              href={'/'}
              className="my-2 underline text-base hover:text-blue-800"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
      {state === 'CredentialsSignin' && (
        <div className="absolute bottom-0">
          <Alert severity="error">
            This Alert displays the default close icon.
          </Alert>
        </div>
      )}
    </div>
  )
}
