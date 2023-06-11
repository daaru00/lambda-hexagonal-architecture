import { test, expect } from 'vitest'
import filterPublicAttributes from '../../../src/domains/user/filterPublicAttributes.mjs'

test('filterPublicAttributes - exposed attributes', () => {
	const user = filterPublicAttributes({
		name: 'John',
		surname: 'Doe',
		email: 'test@example.com',
	})

	expect(user.name).toBe('John')
	expect(user.surname).toBe('Doe')
	expect(user.email).toBe('test@example.com')
})

test('filterPublicAttributes - filtered attributes', () => {
	const user = filterPublicAttributes({
		id: 'xxxxxxxxxx',
		extra: 'test',
		email: 'test@example.com'
	})

	expect(user.id).toBeUndefined()
	expect(user.extra).toBeUndefined()
})
