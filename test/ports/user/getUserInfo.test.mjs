import { test, expect } from 'vitest'
import getUserInfo from '../../../src/ports/user/getUserInfo.mjs'

const INVALID_USER_ID_ERROR = 'Invalid User Id'

test('getUserInfo - invalid id', async () => {
	// NOTE: this has side effects
	await expect(getUserInfo('xxxx')).toBeTypeOf('object')
})

test('getUserInfo - invalid id', async () => {
	// NOTE: this has side effects
	await expect(getUserInfo(null)).rejects.toThrowError(INVALID_USER_ID_ERROR)
})
