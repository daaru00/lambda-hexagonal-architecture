import api from '../../../utils/api.mjs'
import getUserInfo from '../../../ports/user/getUserInfo.mjs'

export async function handler(event) {
	const auth = api.getRequestAuth(event)
	if (!auth) {
		return api.respondClientFail('Invalid Auth')
	}

	const user = await getUserInfo({ userId: auth.userId })

	return api.respondSuccess(user)
}
