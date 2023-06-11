import api from '../../../utils/api.mjs'
import setUserInfo from '../../../ports/user/setUserInfo.mjs'

export async function handler(event) {
	const auth = api.getRequestAuth(event)
	if (!auth) {
		return api.respondClientFail('Invalid Auth')
	}

	const info = api.getRequestBody(event)

	// NOTE: do not perform validation here, will be triggered by port

	try {
		await setUserInfo(auth.userId, info)	
	} catch (error) {
		return api.respondClientFail(error.message)
	}
  
	return api.respondSuccess()
}
