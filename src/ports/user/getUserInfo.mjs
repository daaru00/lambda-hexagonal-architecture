import db from '../../adapters/secondary/db.mjs'
import filterPublicAttributes from '../../domains/user/filterPublicAttributes.mjs'

export default async function ({ userId }, context = { db }) {
	if (!context.db) {
		throw new Error('Invalid Context')
	}

	if (!userId) {
		throw new Error('Invalid User Id')
	}

	const user = await context.db.getUserInfo(userId)

	return filterPublicAttributes(user)
}
