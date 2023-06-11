import { test, expect } from 'vitest'
import api from '../../src/utils/api'

test('getRequestBody - simple key value', () => {
	const body = api.getRequestBody({
		body: '{"key":"value"}'
	})

	expect(body).toBeTypeOf('object')
	expect(body).toHaveProperty('key')
	expect(body.key).toBe('value')
})

test('getRequestBody - empty object', () => {
	const body = api.getRequestBody({
		body: '{}'
	})

	expect(body).toBeTypeOf('object')
})

test('getRequestBody - empty string', () => {
	const body = api.getRequestBody({
		body: ''
	})

	expect(body).toBeTypeOf('object')
})
