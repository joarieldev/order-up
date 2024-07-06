import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar/Navbar'
import Image from 'next/image'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { inter, mont, mont_alter } from '@/config/fonts'
import clsx from 'clsx'
import { getTables } from '@/actions/table/get-tables'

export default async function Home() {
  const res = await getTables()
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <section className="flex flex-col justify-center items-center py-2">
          <CardMedia
            component="img"
            image="/soup.svg"
            alt="order-up logo"
            className="size-10 md:size-12"
          />
          <h1
            className={clsx(
              'text-xl md:text-2xl font-bold',
              mont_alter.className
            )}
          >
            OrderUp
          </h1>
          <p className={clsx('text-sm md:text-lg font-medium', mont.className)}>
            Selecciona tu mesa
          </p>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 md:gap-4 py-5 md:p-10 justify-items-center">
          {res &&
            res.map((item) => (
              <Link key={item.id} href={'/menu/foods'}>
                <Card sx={{ minWidth: 150 }}>
                  <CardActionArea className="flex flex-col items-center">
                    <CardMedia
                      component="img"
                      height="50"
                      image="/mesa.webp"
                      alt="mesa img"
                      className="size-20"
                    />
                    <CardContent>
                      <Typography align="center" variant="h5" component="div">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            ))}
        </section>
      </main>
    </>
  )
}
