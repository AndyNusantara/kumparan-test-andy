import { PostType } from '../../../types/post'
import './style.css'

const Post = (data: PostType) => {
	const handleOnClick = () => {}

	return (
		<button type="button" className="post-container" onClick={handleOnClick}>
			<h2 className="title">{data.title}</h2>
			<p>{data.body.substring(0, 100)}...</p>
			<p>Author: {data.user.name}</p>
		</button>
	)
}

export default Post
