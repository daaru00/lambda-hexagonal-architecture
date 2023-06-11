function getRequestBody(event) {
	return JSON.parse(event.body || '{}')
}

function getRequestAuth(event) {
	if (!event.requestContext || !event.requestContext.authorizer) {
		return { userId: 'xxxxx' }
	}
  
	return event.requestContext.authorizer.claims
}

function respondSuccess(body) {
	return {
		statusCode: 200,
		body: JSON.stringify(body)
	}
}

function respondClientFail(error) {
	// NOTE: should respond with more error's detail
	return {
		statusCode: 400,
		body: error
	}
}

function respondServerFail(error) {
	return {
		statusCode: 500,
		body: error
	}
}

export default {
	getRequestBody,
	getRequestAuth,
	respondSuccess,
	respondClientFail,
	respondServerFail
}
