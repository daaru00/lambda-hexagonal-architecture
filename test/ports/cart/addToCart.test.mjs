import { test, expect, vi } from 'vitest'
import db from '../../../src/adapters/secondary/db.mjs'
import addToCart from '../../../src/ports/cart/addToCart.mjs'

const INVALID_USER_ID_ERROR = 'Invalid User Id'

const spyGetCart = vi.spyOn(db, 'getCart').mockImplementation(async (userId) => ({
	userId,
	products: []
}))
const spySaveCart = vi.spyOn(db, 'saveCart').mockImplementation(() => {})

test('addToCart - invalid id', async () => {
	const userId = 'xxxxxxxxx'
	const product = {
		name: 'Test',
		price: 12.99
	}
	await addToCart({ userId, product }, { db })
	
	expect(spyGetCart).toBeCalledWith(userId)
	expect(spySaveCart).toBeCalledWith(userId, {
		products: [
			{
				name: 'Test',
				price: 12.99,
				quantity: 1,
			},
		],
		total: 12.99,
		userId: userId,
	})
})

test('addToCart - invalid id', async () => {
	await expect(addToCart({})).rejects.toThrowError(INVALID_USER_ID_ERROR)
})
