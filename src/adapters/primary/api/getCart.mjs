import api from '../../../utils/api.mjs'
import getCart from '../../../ports/cart/getCart.mjs'

export async function handler(event) {
	const auth = api.getRequestAuth(event)
	if (!auth) {
		return api.respondClientFail('Invalid Auth')
	}
  
	const cart = await getCart({ userId: auth.userId })
  
	return api.respondSuccess(cart)
}
