import { Button, CardMedia } from '@mui/material'

interface Props {
  handleClose: () => void
}

export const OrderModal = ({ handleClose }: Props) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex justify-center items-center w-screen h-screen">
      <div
        onClick={handleClose}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 overflow-hidden"
      />
      <div className="relative bg-white rounded-lg shadow p-1 sm:p-2 max-sm:mx-6 sm:max-w-xl 2xl:max-w-2xl border border-gray-300">
        <div className="flex items-center justify-between border-b border-gray-300 p-2">
          <h3 className="text-xl font-semibold text-gray-900">Orden</h3>
          <button
            onClick={handleClose}
            type="button"
            className="hover:bg-gray-200 bg-gray-100 rounded-lg p-1"
          >
            <CardMedia
              component="img"
              height="50"
              image="/x.svg"
              alt="x img"
              className="size-5"
            />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="h-72 2xl:h-80 overflow-auto p-2">
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque,
            atque odit modi alias similique asperiores consequuntur! Nesciunt
            reiciendis reprehenderit expedita voluptates dolor optio, deserunt
            laudantium? Quo voluptatum ut sint.
          </p>
        </div>
        <div className="flex items-center justify-center border-t border-gray-300 p-2">
          <Button variant="outlined" color="inherit">
            Ordenar
          </Button>
        </div>
      </div>
    </div>
  )
}
