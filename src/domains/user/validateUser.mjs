export default function (user) {
	if (!user || [user.name, user.surname].some(v => !v)) {
		throw new Error('Invalid Required Infos')
	}
}
