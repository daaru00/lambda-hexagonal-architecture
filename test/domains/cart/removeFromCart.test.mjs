import { test, expect } from 'vitest'
import removeFromCart from '../../../src/domains/cart/removeFromCart.mjs'

const INVALID_PRODUCT_ERROR = 'Invalid Product'

test('removeFromCart - valid product', () => {
	const cart = removeFromCart({
		products: [{
			name: 'Test'
		}]
	}, {
		name: 'Test',
	})

	expect(cart.products).toHaveLength(0)
})

test('removeFromCart - not found product', () => {
	const cart = removeFromCart({
		products: [{
			name: 'Test Existing'
		}]
	}, {
		name: 'Test'
	})

	expect(cart.products).toHaveLength(1)
	expect(cart.products[0]).toHaveProperty('name', 'Test Existing')
})


test('removeFromCart - invalid product', () => {
	expect(() => {
		removeFromCart({
			products: [{
				name: 'Test'
			}]
		}, {})
	}).toThrowError(INVALID_PRODUCT_ERROR)
})
