import { news_data } from "@/mock/order-up/news"


export const getNews = async () => {
  try {

    // TODO - obtener los datos de la BD

    const results = news_data
    return results
    
  } catch (error) {
    console.log(error)
    return []
  }
}
