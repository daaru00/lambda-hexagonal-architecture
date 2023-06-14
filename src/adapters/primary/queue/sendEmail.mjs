import sendEmailToUser from '../../../ports/user/sendEmailToUser.mjs'
import queue from '../../../utils/queue.mjs'

export async function handler(event) {
	const records = queue.getRecords(event)

	const promises = []
	for (const record of records) {
		promises.push(
			await sendEmailToUser({ user: record.user, template: record.template })
		)
	}

	await Promise.all(promises)
}
