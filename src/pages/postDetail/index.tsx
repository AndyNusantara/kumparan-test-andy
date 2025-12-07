import { usePostDetail } from '../../hooks/usePostDetail.ts'
import { useParams } from 'react-router-dom'
import './style.css'
import Divider from '../../components/divider/divider.tsx'
import Comment from './components/comment.tsx'

const PostDetailPage = () => {
	const { id } = useParams<{ id: string }>()

	const { post, loading, error } = usePostDetail(String(id))

	if (error) return <div>Error: {error.message}</div>
	if (loading) return <div>Loading...</div>

	return (
		<div className="post-detail-container">
			<div className="post-header">
				<h1>{post?.title}</h1>
				<div className="post-author">
					<h4>
						{post?.user.name} | {post?.user.email}
					</h4>
				</div>
			</div>
			<Divider />
			<span>{post?.body}</span>
			<div className="comments">
				{post?.comments.data.map((item) => (
					<Comment {...item} />
				))}
			</div>
		</div>
	)
}

export default PostDetailPage
