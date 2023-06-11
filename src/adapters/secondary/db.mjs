async function getUserInfo(userId) {
	console.log('Retrieving user from DB', { userId })
	return {
		id: userId,
		name: 'Mario',
		surname: 'Rossi',
	}
}

async function putUserInfo(userId, info) {
	console.log('Saving user to DB', { userId, info })
	return {
		id: userId,
		...info
	}
}

async function importProduct(product) {
	console.log('Importing product into DB', { product })
}

async function listProducts() {
	console.log('Listing products from DB')
	return [{
		name: 'Test',
		price: 5.99
	},{
		name: 'Example',
		price: 3.60
	}]
}

async function getCart(userId) {
	console.log('Retrieving user cart', { userId })
}

async function saveCart(userId, cart) {
	console.log('Saving user cart', { userId, cart })
}

export default {
	getUserInfo,
	putUserInfo,
	importProduct,
	listProducts,
	getCart,
	saveCart,
}
