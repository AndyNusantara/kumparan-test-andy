import Divider from '../../../components/divider/divider.tsx'
import { CommentType } from '../../../types/post'
import './style.css'

const Comment = (data: CommentType) => {
	return (
		<div className="comment">
			<div className="comment-title">
				<h5>
					{data.name} | {data.email}
				</h5>
			</div>
			<Divider />
			<div className="comment-body">
				<p>{data.body}</p>
			</div>
		</div>
	)
}

export default Comment
