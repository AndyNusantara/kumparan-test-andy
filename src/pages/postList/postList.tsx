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

	if (error) return <div>Error: {error.message}</div>

	return (
		<div className="container">
			<div className="post-list-container">
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
					<button
						type="button"
						onClick={prevPage}
						disabled={!hasPrev || loading}
						className="pagination-btn"
					>
						← Previous
					</button>
					Current Page : {currentPage}
					<button
						type="button"
						onClick={nextPage}
						disabled={!hasNext || loading}
						className="pagination-btn"
					>
						Next →
					</button>
				</div>
			</div>
		</div>
	)
}

export default PostsList
