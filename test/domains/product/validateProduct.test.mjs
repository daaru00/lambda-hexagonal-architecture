import { test, expect } from 'vitest'
import validateProduct from '../../../src/domains/product/validateProduct.mjs'

const INVALID_PRODUCT_ERROR = 'Invalid Product'

test('validateProduct - valid product', () => {
	expect(() => {
		validateProduct({
			name: 'Test',
			price: 2.99
		})
	}).not.toThrowError(INVALID_PRODUCT_ERROR)
})

test('validateProduct - invalid product', () => {
	expect(() => {
		validateProduct({})
	}).toThrowError(INVALID_PRODUCT_ERROR)

	expect(() => {
		validateProduct({
			name: 'Test',
		})
	}).toThrowError(INVALID_PRODUCT_ERROR)

	expect(() => {
		validateProduct({
			name: 'Test',
			price: 0
		})
	}).toThrowError(INVALID_PRODUCT_ERROR)
})
