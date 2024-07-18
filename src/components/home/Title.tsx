import { mont, mont_alter } from '@/config/fonts'
import clsx from 'clsx'
import Image from 'next/image'

export const Title = () => {
  return (
    <>
      <Image
        src="/soup.svg"
        height={100}
        width={100}
        alt="order-up logo"
        className="size-10 md:size-12"
      />
      <h1
        className={clsx('text-xl md:text-2xl font-bold', mont_alter.className)}
      >
        OrderUp
      </h1>
      <p className={clsx('text-sm md:text-lg font-medium', mont.className)}>
        Selecciona tu mesa
      </p>
    </>
  )
}
