import { useQuery } from '@apollo/client/react'
import { GET_USERS_ID } from '../api/queries'
import { GetUsersIDResponse } from '../types/post'

export const useUsersID = () => {
	const { loading, error, data } = useQuery<GetUsersIDResponse>(GET_USERS_ID)

	const usersID = data?.users

	return {
		error,
		loading,
		usersID
	}
}
