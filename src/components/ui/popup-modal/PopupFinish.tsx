import { Button } from "@mui/material"

interface Props {
  popup: (msg: boolean) => void
}
export const PopupFinish = ({ popup }: Props) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex justify-center items-center w-screen h-screen">
    <div
      onClick={() => popup(false)}
      className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 overflow-hidden"
    />
    <div className="relative bg-white rounded-lg shadow-md border border-gray-300 max-sm:mx-7 w-full sm:w-[366px] 2xl:w-[466px]">
      <div className="p-3 sm:p-5 text-center">
        <h3 className="mb-5 text-lg font-normal text-gray-600">
          Se iniciara un nuevo periodo de registros (remove Local storage). Continuar?
        </h3>
        <div className="flex gap-2 sm:gap-4 justify-center">
          <Button
            onClick={() => popup(false)}
            variant="contained"
            color="error"
          >
            No, cancelar
          </Button>
          <Button
            onClick={() => popup(true)}
            variant="contained"
            color="primary"
          >
            Si, confirmar
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}
