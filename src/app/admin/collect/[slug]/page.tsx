import { getOrder } from "@/actions/order/get-order"
import { CollectOrder } from "@/components/collect/CollectOrder"

interface Props {
  params: {
    slug: string
  }
}
export default async function CollectNamePage({ params }: Props) {
  const { slug } = params
  const transformedSlug = slug.replace('_', '')
  const tableUser = transformedSlug.charAt(0).toUpperCase() + transformedSlug.slice(1)

  // const res = await getOrder("Mesa2")
  // if (!res.ok) {
  //   console.log('Error al obtener la orden')
  // }
  // console.log(res)
  // const resFilter: IOrder[] = res.order?.filter((item) => item.paid === false)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl">{tableUser}</h1>
      <CollectOrder table={tableUser}/>
    </div>
  )
}
