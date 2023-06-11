import db from '../../adapters/secondary/db.mjs'
import addToCart from '../../domains/cart/addToCart.mjs'
import getCartTotal from '../../domains/cart/getCartTotal.mjs'

export default async function (userId, product) {
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	// NOTE: require product's price from database, not from request

	let cart = await db.getCart(userId)
	cart = addToCart(cart, product)
	cart.total = getCartTotal(cart)

	await db.saveCart(userId, cart)
}
