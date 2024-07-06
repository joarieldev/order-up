import { Inter, Montserrat_Alternates, Montserrat } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const mont = Montserrat({ subsets: ['latin'] })
export const mont_alter = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
})
