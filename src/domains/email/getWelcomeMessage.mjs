export default function (user) {
	if (!user.name) {
		throw new Error('Invalid User Info')
	}

	return `Welcome ${user.name}!`
}
