import api from '../../../utils/api.mjs'
import addToCart from '../../../ports/cart/addToCart.mjs'

export async function handler(event) {
	const auth = api.getRequestAuth(event)
	if (!auth) {
		return api.respondClientFail('Invalid Auth')
	}

	const product = api.getRequestBody(event)

	// NOTE: do not perform validation here, will be triggered by port

	try {
		await addToCart(auth.userId, product)	
	} catch (error) {
		return api.respondClientFail(error.message)
	}
  
	return api.respondSuccess()
}
