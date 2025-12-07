import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const CreatePostPage = () => {
	const navigate = useNavigate()
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState('1')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
	}

	const handleCancel = () => {
		navigate('/')
	}

	return (
		<div className="create-post-page">
			<h1>Create New Post</h1>

			<div className="form-container">
				<form onSubmit={handleSubmit} className="post-form">
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter post title"
							required
							// disabled={loading}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="body">Content</label>
						<textarea
							id="body"
							value={body}
							onChange={(e) => setBody(e.target.value)}
							placeholder="Write your post content..."
							rows={6}
							required
							// disabled={loading}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="userId">User ID</label>
						<select
							id="userId"
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
							// disabled={loading}
						>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
								<option key={num} value={num.toString()}>
									User {num}
								</option>
							))}
						</select>
					</div>

					<div className="form-actions">
						<button
							type="button"
							onClick={handleCancel}
							className="button"
							// disabled={loading}
						>
							Cancel
						</button>
						<button type="submit" className="button button-submit">
							{/* {loading ? 'Creating...' : 'Create Post'} */}
							Create Post
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CreatePostPage
