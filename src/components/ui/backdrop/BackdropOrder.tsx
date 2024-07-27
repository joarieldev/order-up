import { mont_alter } from '@/config/fonts'
import { Grow } from '@mui/material'
import clsx from 'clsx'

export const BackdropOrder = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-white transition ease-in-out duration-700">
        <h1
          className={clsx(
            'taxt-xl sm:text-2xl font-normal px-4 text-center',
            mont_alter.className
          )}
        >
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 2000 }}
          >
            <span>Orden enviada, espere mientras se prepara el pedido</span>
          </Grow>
        </h1>
    </div>
  )
}
