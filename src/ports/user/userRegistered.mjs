import db from '../../adapters/secondary/db.mjs'
import queue from '../../adapters/secondary/queue.mjs'
import events from '../../adapters/secondary/events.mjs'
import crm from '../../adapters/secondary/crm.mjs'

export default async function (userId) {
	if (!userId) {
		throw new Error('Invalid User Id')
	}

	const user = await db.getUserInfo(userId)
	
	await crm.createUser(user)
	await queue.putEmailMessage(user, 'welcome')
	await events.sendNewUser(user)
}
