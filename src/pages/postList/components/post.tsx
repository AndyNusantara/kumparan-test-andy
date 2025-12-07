import { PostType } from '../../../types/post'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Post = (data: PostType) => {
	const navigate = useNavigate()

	const handleOnClick = () => {
		navigate(`/post/${data.id}`)
	}

	return (
		<div className="post-container" onClick={handleOnClick}>
			<h2 className="title">{data.title}</h2>
			<p>{data.body.substring(0, 100)}...</p>
			<p>Author: {data.user.name}</p>
		</div>
	)
}

export default Post
