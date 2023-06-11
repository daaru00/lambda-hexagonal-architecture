import db from '../../adapters/secondary/db.mjs'
import getCartTotal from '../../domains/cart/getCartTotal.mjs'
import removeFromCart from '../../domains/cart/removeFromCart.mjs'

export default async function (userId, product) {
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	let cart = await db.getCart(userId)
	cart = removeFromCart(cart, product)
	cart.total = getCartTotal(cart)

	await db.saveCart(userId, cart)
}
