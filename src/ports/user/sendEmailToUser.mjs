import email from '../../adapters/secondary/email.mjs'
import getUserContact from '../../domains/user/getUserContact.mjs'
import getWelcomeMessage from '../../domains/email/getWelcomeMessage.mjs'

export default async function ({ user, template }, context = { email }) {
	if (!context.email) {
		throw new Error('Invalid Context')
	}

	// NOTE: this looks like a domain logic 
	let message = ''
	switch (template) {
	case 'welcome':
		message = getWelcomeMessage(user)
		break
	default:
		throw new Error('Invalid Email Template')
	}

	const to = getUserContact(user)

	return await context.email.sendEmail(to, message)
}
