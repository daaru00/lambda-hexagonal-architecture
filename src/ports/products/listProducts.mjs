import db from '../../adapters/secondary/db.mjs'

export default async function (context = { db }) {
	if (!context.db) {
		throw new Error('Invalid Context')
	}

	return await context.db.listProducts()
}
