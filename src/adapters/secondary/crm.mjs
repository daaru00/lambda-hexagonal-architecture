async function createUser(user) {
	console.log('Sending user to CRM', { user })
}

async function updateUser(user) {
	console.log('Updating user to CRM', { user })
}

export default {
	createUser,
	updateUser
}
