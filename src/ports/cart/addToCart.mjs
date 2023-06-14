import db from '../../adapters/secondary/db.mjs'
import addToCart from '../../domains/cart/addToCart.mjs'
import getCartTotal from '../../domains/cart/getCartTotal.mjs'

export default async function ({ userId, product }, context = { db }) {
	if (!context.db) {
		throw new Error('Invalid Context')
	}

	if (!userId) {
		throw new Error('Invalid User Id')
	}

	// NOTE: require product's price from database, not from request

	let cart = await context.db.getCart(userId)
	cart = addToCart(cart, product)
	cart.total = getCartTotal(cart)

	await context.db.saveCart(userId, cart)
}
