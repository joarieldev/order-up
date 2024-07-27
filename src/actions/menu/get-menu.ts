import { menu_data } from '@/mock/order-up/menu'

export const getMenu = async () => {
  try {

    // TODO - obtener los datos de la BD

    const results = menu_data
    return results
    
  } catch (error) {
    console.log(error)
    return []
  }
}
