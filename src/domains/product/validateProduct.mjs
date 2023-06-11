export default function (product) {
	if (!product || [product.name, product.price].some(v => !v) || product.price <= 0) {
		throw new Error('Invalid Product')
	}
}
