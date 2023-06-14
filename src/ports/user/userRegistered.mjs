import db from '../../adapters/secondary/db.mjs'
import queue from '../../adapters/secondary/queue.mjs'
import events from '../../adapters/secondary/events.mjs'
import crm from '../../adapters/secondary/crm.mjs'

export default async function ({ userId }, context = { db, queue, events, crm }) {
	if (!context.db || !context.queue || !context.events || !context.crm) {
		throw new Error('Invalid Context')
	}

	if (!userId) {
		throw new Error('Invalid User Id')
	}

	const user = await context.db.getUserInfo(userId)
	
	await context.crm.createUser(user)
	await context.queue.putEmailMessage(user, 'welcome')
	await context.events.sendNewUser(user)
}
