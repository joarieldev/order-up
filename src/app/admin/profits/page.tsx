import { getMenu } from '@/actions/menu/get-menu'
import { getOrders } from '@/actions/order/get-orders'
import { TabsContainer } from '@/components/profits/TabsContainer'

export default async function ProfitsPage() {
  const res = await getMenu()
  return <TabsContainer menu={res} />
}
