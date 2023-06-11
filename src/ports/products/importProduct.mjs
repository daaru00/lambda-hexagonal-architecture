import db from '../../adapters/secondary/db.mjs'
import validateProduct from '../../domains/product/validateProduct.mjs'

export default async function (product) {
	validateProduct(product)
  
	return await db.importProduct(product)
}
