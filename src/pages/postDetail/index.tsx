import { usePostDetail } from '../../hooks/usePostDetail.ts'
import { useLocation, useParams } from 'react-router-dom'
import Divider from '../../components/divider/divider.tsx'
import Comment from './components/comment.tsx'
import './style.css'
import { PostType } from '../../types/post.ts'
import Loading from '../../components/loading/loading.tsx'
import Empty from '../../components/empty/empty.tsx'

const PostDetailPage = () => {
	const { id } = useParams<{ id: string }>()
	const location = useLocation()

	const passedPost = location.state?.post

	const { post: fetchedPost, loading, error } = usePostDetail(String(id))

	const post = passedPost?.id === id ? passedPost : fetchedPost
	const isLoading = !passedPost && loading
	const hasError = !passedPost && error

	if (isLoading) return <Loading />
	if (!post) return <Empty />
	if (hasError) return <div>Error: {error.message}</div>

	return <PostDetailContent post={post} />
}

const PostDetailContent = ({ post }: { post: PostType }) => {
	return (
		<div className="post-detail-container">
			<div className="post-header">
				<h1>{post.title}</h1>
				<div className="post-author">
					<h4>
						{post.user.name} | {post.user.email}
					</h4>
				</div>
			</div>
			<Divider />
			<span>{post.body}</span>
			<div className="comments">
				{post.comments?.data?.map((item) => (
					<Comment key={String(item.id)} data={item} />
				))}
			</div>
		</div>
	)
}

export default PostDetailPage
