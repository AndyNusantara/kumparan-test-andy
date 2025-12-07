import { useMutation } from '@apollo/client/react'
import { CREATE_POST } from '../api/queries'
import { CreatePostResponse } from '../types/post'

export const useCreatePost = () => {
	const [createPost, { data, loading, error }] =
		useMutation<CreatePostResponse>(CREATE_POST)

	const submitPost = async (title: string, body: string) => {
		const result = await createPost({
			variables: {
				input: { title, body }
			}
		})

		return result.data
	}

	return {
		submitPost,
		loading,
		error,
		data
	}
}
