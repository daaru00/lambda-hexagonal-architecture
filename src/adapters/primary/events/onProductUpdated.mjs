import importProduct from '../../../ports/products/importProduct.mjs'
import events from '../../../utils/events.mjs'

export async function handler(event) {
	const product = events.getEventDetail(event)
	// NOTE: reuse an existing port
	await importProduct(product)
}
