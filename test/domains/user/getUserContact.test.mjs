import { test, expect } from 'vitest'
import getUserContact from '../../../src/domains/user/getUserContact.mjs'

const INVALID_USER_CONTACT_ERROR = 'Invalid User Contact'

test('getUserContact - valid email', () => {
	const to = getUserContact({
		email: 'test@example.com'
	})

	expect(to).toBeTypeOf('string')
	expect(to).toBe('test@example.com')
})

test('getUserContact - invalid email', () => {
	expect(() => {
		getUserContact({})
	}).toThrowError(INVALID_USER_CONTACT_ERROR)
})
