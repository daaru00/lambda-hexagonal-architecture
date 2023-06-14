import db from '../../adapters/secondary/db.mjs'

export default async function ({ userId }, context = { db }) {
	if (!context.db) {
		throw new Error('Invalid Context')
	}
	
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	return await context.db.getCart(userId)
}
