import { test, expect } from 'vitest'
import getWelcomeMessage from '../../../src/domains/email/getWelcomeMessage.mjs'

const INVALID_USER_INFO_ERROR = 'Invalid User Info'

test('getWelcomeMessage - valid user', () => {
	const message = getWelcomeMessage({
		name: 'John'
	})

	expect(message).toBeTypeOf('string')
	expect(message).toBe('Welcome John!')
})

test('getWelcomeMessage - invalid user', () => {
	expect(() => {
		getWelcomeMessage({})
	}).toThrowError(INVALID_USER_INFO_ERROR)
})
