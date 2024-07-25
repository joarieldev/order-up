import { ITable } from '@/interfaces/table.interface'
import { CollectItem } from './CollectItem'

interface Props {
  res: ITable[]
}
export const CollectList = ({ res }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
      {res && res.map((item) => <CollectItem key={item.id} table={item} />)}
    </div>
  )
}
