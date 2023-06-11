import validateUser from '../../domains/user/validateUser.mjs'
import db from '../../adapters/secondary/db.mjs'
import crm from '../../adapters/secondary/crm.mjs'

export default async function (userId, info) {
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	validateUser(info)

	const user = await db.putUserInfo(userId, info)
	
	await crm.updateUser(user)
}
