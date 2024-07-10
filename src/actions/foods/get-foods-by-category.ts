import { foods_data } from '@/mock/order-up/foods'

export const getFoodsByCategory = async ( category: string ) => {
  try {

    // TODO - obtener los datos de la BD

    const results = foods_data.filter(item => item.category === category)
    return results
    
  } catch (error) {
    console.log(error)
    return []
  }
}
