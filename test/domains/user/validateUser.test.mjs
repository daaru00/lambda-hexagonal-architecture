import { test, expect } from 'vitest'
import validateUser from '../../../src/domains/user/validateUser'

const INVALID_REQUIRED_INFO_ERROR = 'Invalid Required Infos'

test('validateUser - valid user', () => {
	expect(() => {
		validateUser({
			name: 'john',
			surname: 'doe'
		})
	}).not.toThrowError(INVALID_REQUIRED_INFO_ERROR)
})

test('validateUser - invalid user', () => {
	expect(() => {
		validateUser({})
	}).toThrowError(INVALID_REQUIRED_INFO_ERROR)

	expect(() => {
		validateUser({
			name: 'john',
		})
	}).toThrowError(INVALID_REQUIRED_INFO_ERROR)

	expect(() => {
		validateUser({
			surname: 'doe'
		})
	}).toThrowError(INVALID_REQUIRED_INFO_ERROR)
})
