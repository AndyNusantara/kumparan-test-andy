import { useQuery } from '@apollo/client/react'
import { GET_POST } from '../api/queries'
import { GetPostResponse } from '../types/post'

export const usePostDetail = (id: string) => {
	const { loading, error, data } = useQuery<GetPostResponse>(GET_POST, {
		variables: { id }
	})

	return {
		post: data?.post,
		error,
		loading
	}
}
