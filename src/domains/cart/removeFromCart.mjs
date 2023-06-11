export default function (cart, product) {
	if (!product || !product.name) {
		throw new Error('Invalid Product')
	}

	if (!cart.products) {
		cart.products = []
		return cart
	}

	const index = cart.products.findIndex(p => p.name === product.name)
	if (index == -1) {
		return cart
	}
	cart.products.splice(index, 1)

	return cart
}
