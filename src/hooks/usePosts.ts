import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { GET_POSTS } from '../api/queries'
import { GetPostsResponse } from '../types/post'

export const usePosts = () => {
	const [page, setPage] = useState(1)
	const limit = 5

	const { loading, error, data } = useQuery<GetPostsResponse>(GET_POSTS, {
		variables: { page, limit }
	})

	const posts = data?.posts
	const hasPrev = data?.posts.links.prev !== null
	const hasNext = data?.posts.links.next !== null

	const goToPage = (newPage: number) => setPage(newPage)
	const nextPage = () => hasNext && goToPage(page + 1)
	const prevPage = () => hasPrev && goToPage(page - 1)

	return {
		posts,
		error,
		loading,
		currentPage: page,
		hasPrev,
		hasNext,
		nextPage,
		prevPage
	}
}
