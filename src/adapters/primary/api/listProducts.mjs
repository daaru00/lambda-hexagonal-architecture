import api from '../../../utils/api.mjs'
import listProducts from '../../../ports/products/listProducts.mjs'

export async function handler() {
	const products = await listProducts()
  
	return api.respondSuccess(products)
}
