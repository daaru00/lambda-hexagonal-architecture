export default function (cart, product) {
	if (!product || !product.name || !product.price) {
		throw new Error('Invalid Product')
	}
	
	cart.products = cart.products || []

	const index = cart.products.findIndex(p => p.name === product.name)
	if (index > -1) {
		cart.products[index].quantity++
	} else {
		cart.products.push({
			name: product.name,
			price: product.price,
			quantity: 1
		})
	}

	return cart
}
