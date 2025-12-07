import { useNavigate } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts.ts'
import Post from './components/post.tsx'
import './style.css'

const PostsList = () => {
	const {
		posts,
		loading,
		error,
		currentPage,
		hasPrev,
		hasNext,
		nextPage,
		prevPage
	} = usePosts()

	const navigate = useNavigate()

	const handleOnClick = () => {
		navigate(`/post/create`)
	}

	if (error) return <div>Error: {error.message}</div>

	return (
		<div className="post-list-container">
			<button type="button" onClick={handleOnClick}>
				Create Post
			</button>

			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="post-list">
					{posts?.data.map((post) => (
						<div key={String(post.id)}>
							<Post {...post} />
						</div>
					))}
				</div>
			)}

			<div className="pagination">
				<button type="button" onClick={prevPage} disabled={!hasPrev || loading}>
					← Previous
				</button>
				Current Page : {currentPage}
				<button type="button" onClick={nextPage} disabled={!hasNext || loading}>
					Next →
				</button>
			</div>
		</div>
	)
}

export default PostsList
