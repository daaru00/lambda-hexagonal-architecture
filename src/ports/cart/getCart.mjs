import db from '../../adapters/secondary/db.mjs'

export default async function (userId) {
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	return await db.getCart(userId)
}
