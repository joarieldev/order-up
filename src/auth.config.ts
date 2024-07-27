import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { getUser } from './actions/users/get-user'
// import { IUser } from './interfaces/user.interface'

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // console.log({ auth })
      // const isLoggedIn = !!auth?.user

      // const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      // if (isOnAdmin) {
      //   if (isLoggedIn) return true
      //   return false // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   if ((auth.user as IUser).role === 'admin') return true
      // }

      return true
    },

    jwt({ token, user }) {
      if (user) {
        token.data = user
      }
      return token
    },

    session({ session, token, user }) {
      session.user = token.data as any
      return session
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ user: z.string(), password: z.string() })
          .safeParse(credentials)

        if (!parsedCredentials.success) return null

        const { user, password } = parsedCredentials.data

        const data = await getUser(user)
          .then((res) => {
            return res
          })
          .catch((err) => {
            return console.log('signin ' + err)
          })

        if (!data) return null
        if (data.password !== password) return null

        return {
          id: data.id,
          user: data.user,
          role: data.role,
        }
      },
    }),
  ],
}

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)
