import validateUser from '../../domains/user/validateUser.mjs'
import db from '../../adapters/secondary/db.mjs'
import crm from '../../adapters/secondary/crm.mjs'

export default async function ({ userId, info }, context = { db, crm }) {
	if (!context.db || !context.crm) {
		throw new Error('Invalid Context')
	}

	if (!userId) {
		throw new Error('Invalid User Id')
	}

	validateUser(info)

	const user = await context.db.putUserInfo(userId, info)
	
	await context.crm.updateUser(user)
}
