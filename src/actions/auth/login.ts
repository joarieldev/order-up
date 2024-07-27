'use server'

import { signIn } from '@/auth.config'

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    })

    return 'Success'
  } catch (error) {
    console.log('Error CredentialsSignin')
    return 'CredentialsSignin'
  }
}

export const login = async (user: string, password: string) => {
  try {
    await signIn('credentials', { user, password, redirect: false })

    return { ok: true }
  } catch (error) {
    console.log(error, 'Error inicio de sesión')
    return {
      ok: false,
      message: 'No se pudo iniciar sesión',
    }
  }
}
