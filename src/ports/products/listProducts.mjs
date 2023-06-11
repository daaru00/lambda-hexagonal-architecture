import db from '../../adapters/secondary/db.mjs'

export default async function () {
	return await db.listProducts()
}
