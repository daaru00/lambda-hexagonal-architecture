async function putEmailMessage(user, template) {
	console.log('Putting email message into queue', { user, template })
}

export default {
	putEmailMessage
}
