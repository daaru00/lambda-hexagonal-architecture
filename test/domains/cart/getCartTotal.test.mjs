import { test, expect } from 'vitest'
import getCartTotal from '../../../src/domains/cart/getCartTotal.mjs'

test('getCartTotal - valid products', () => {
	const total = getCartTotal({
		products: [{
			name: 'Test',
			price: 5.99,
			quantity: 1
		}]
	})

	expect(total).toBeTypeOf('number')
	expect(total).toBe(5.99)
})

test('getCartTotal - valid products with quantity', () => {
	const total = getCartTotal({
		products: [{
			name: 'Test',
			price: 5.99,
			quantity: 2
		}, {
			name: 'Test',
			price: 3.60,
			quantity: 1
		}]
	})

	expect(total).toBeTypeOf('number')
	expect(total).toBe(15.58)
})

test('getCartTotal - empty products', () => {
	const total = getCartTotal({
		products: []
	})

	expect(total).toBeTypeOf('number')
	expect(total).toBe(0)
})
