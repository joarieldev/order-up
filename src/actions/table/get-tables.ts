import { table_data } from '@/mock/order-up/table'

export const getTables = async () => {
  try {

    // TODO - obtener los datos de la BD

    const results = table_data
    return results
    
  } catch (error) {
    console.log(error)
    return []
  }
}
