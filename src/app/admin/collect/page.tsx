import { getTables } from "@/actions/table/get-tables"
import { CollectList } from "@/components/collect/CollectList"

export default async function CollectPage() {
  const res = await getTables()
  
  return (
    <CollectList res={res}/>
  )
}
