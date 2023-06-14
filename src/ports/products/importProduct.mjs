import db from '../../adapters/secondary/db.mjs'
import validateProduct from '../../domains/product/validateProduct.mjs'

export default async function ({ product }, context = { db }) {
	if (!context.db) {
		throw new Error('Invalid Context')
	}
	
	validateProduct(product)
  
	return await context.db.importProduct(product)
}
