import db from '../../adapters/secondary/db.mjs'
import getCartTotal from '../../domains/cart/getCartTotal.mjs'
import removeFromCart from '../../domains/cart/removeFromCart.mjs'

export default async function ({ userId, product }, context = { db }) {
	if (!context.db) {
		throw new Error('Invalid Context')
	}
	
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	let cart = await context.db.getCart(userId)
	cart = removeFromCart(cart, product)
	cart.total = getCartTotal(cart)

	await context.db.saveCart(userId, cart)
}
