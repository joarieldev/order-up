import { IMenu } from '@/interfaces/menu.interface'
import {
  Accordion,
  AccordionSummary,
  CardMedia,
} from '@mui/material'
import { MenuItem } from './MenuItem'

interface Props {
  menu: IMenu[]
}
export const Menus = ({ menu }: Props) => {

  return (
    <div className="px-2 sm:px-12">
      {menu &&
        menu.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={
                <CardMedia
                  component="img"
                  height="50"
                  image="/chevron-down.svg"
                  alt="user img"
                  className="size-5"
                />
              }
            >
              {item.food}
            </AccordionSummary>
            <MenuItem foodCategory={item.food}/>
          </Accordion>
        ))}
    </div>
  )
}
