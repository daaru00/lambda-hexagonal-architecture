import onUserRegistered from '../../../ports/user/userRegistered.mjs'
import events from '../../../utils/events.mjs'

export async function handler(event) {
	const user = events.getEventDetail(event)
	
	await onUserRegistered({ userId: user.id })
}
