import api from '../../../utils/api.mjs'
import removeFromCart from '../../../ports/cart/removeFromCart.mjs'

export async function handler(event) {
	const auth = api.getRequestAuth(event)
	if (!auth) {
		return api.respondClientFail('Invalid Auth')
	}

	const product = api.getRequestBody(event)

	// NOTE: do not perform validation here, will be triggered by port

	try {
		await removeFromCart(auth.userId, product)	
	} catch (error) {
		return api.respondClientFail(error.message)
	}
  
	return api.respondSuccess()
}
