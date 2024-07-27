import { users_data } from '@/mock/order-up/users'

export const getUser = async ( user: string ) => {
  try {

    // TODO - obtener los datos de la BD

    const result = users_data.find(item => item.user === user)
    return result
    
  } catch (error) {
    console.log(error)
    return null
  }
}
