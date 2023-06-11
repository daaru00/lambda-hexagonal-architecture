import db from '../../adapters/secondary/db.mjs'
import filterPublicAttributes from '../../domains/user/filterPublicAttributes.mjs'

export default async function (userId) {
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	const user = await db.getUserInfo(userId)

	return filterPublicAttributes(user)
}
