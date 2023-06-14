import { test, expect, vi } from 'vitest'
import db from '../../../src/adapters/secondary/db.mjs'
import getUserInfo from '../../../src/ports/user/getUserInfo.mjs'

const INVALID_USER_ID_ERROR = 'Invalid User Id'

const spyGetUserInfo = vi.spyOn(db, 'getUserInfo').mockImplementation(async (userId) => ({
	id: userId,
	name: 'John',
	surname: 'Doe',
}))

test('getUserInfo - valid id', async () => {
	const userId = 'xxxxxx'
	const user = await getUserInfo({ userId }, { db })

	expect(user).toBeTypeOf('object')
	expect(user.name).toBe('John')
	expect(user.surname).toBe('Doe')
	
	expect(spyGetUserInfo).toBeCalledWith(userId)
})

test('getUserInfo - invalid id', async () => {
	await expect(getUserInfo({})).rejects.toThrowError(INVALID_USER_ID_ERROR)
})
