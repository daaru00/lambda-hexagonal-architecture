import { test, expect } from 'vitest'
import addToCart from '../../../src/domains/cart/addToCart.mjs'

const INVALID_PRODUCT_ERROR = 'Invalid Product'

test('addToCart - valid product', () => {
	const cart = addToCart({
		products: []
	}, {
		name: 'Test',
		price: 4.99,
	})

	expect(cart.products).toHaveLength(1)
})

test('addToCart - product with quantity', () => {
	const cart = addToCart({
		products: []
	}, {
		name: 'Test',
		price: 3.99,
		quantity: 2
	})

	expect(cart.products).toHaveLength(1)
})

test('addToCart - product with existing', () => {
	const cart = addToCart({
		products: [{
			name: 'Test 2',
			price: 2.60
		}]
	}, {
		name: 'Test',
		price: 3.99
	})

	expect(cart.products).toHaveLength(2)
})

test('addToCart - product with same existing', () => {
	const cart = addToCart({
		products: [{
			name: 'Test',
			price: 3.99,
			quantity: 1
		}]
	}, {
		name: 'Test',
		price: 3.99
	})

	expect(cart.products).toHaveLength(1)
	expect(cart.products[0]).toHaveProperty('quantity', 2)
})

test('addToCart - invalid product', () => {
	expect(() => {
		addToCart({
			products: []
		}, {})
	}).toThrowError(INVALID_PRODUCT_ERROR)
})
