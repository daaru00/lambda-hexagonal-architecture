export default function (user) {
	if (!user.email) {
		throw new Error('Invalid User Contact')
	}

	return user.email
}
