import { getMenu } from "@/actions/menu/get-menu";
import { getNews } from "@/actions/news/get-news";
import FoodInicio from "@/components/food/FoodInicio";

export default async function FoodsPage() {
  const res = await getMenu()
  const news = await getNews()
  
  return (
    <FoodInicio res={res} news={news}/>
  )
}
