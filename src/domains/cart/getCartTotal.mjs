export default function (cart) {
	if (!cart.products) {
		return 0
	}
  
	return cart.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)
}
