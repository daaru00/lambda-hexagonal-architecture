function getRecords(event) {
	const records = []

	for (let { body } of event.Records) {
		if (typeof body === 'string') {
			body = JSON.parse(body)
		}
		records.push(body)
	}

	return records
}

export default {
	getRecords,
}
