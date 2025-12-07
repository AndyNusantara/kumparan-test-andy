import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { useUsersID } from '../../hooks/useUsers.ts'
import { useCreatePost } from '../../hooks/useCreatePost.ts'

const CreatePostPage = () => {
	const navigate = useNavigate()
	const {
		usersID,
		loading: fetchUserLoading,
		error: fetchUsersIDError
	} = useUsersID()
	const { submitPost, loading, error } = useCreatePost()
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [userId, setUserId] = useState('1')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const newPost = await submitPost(title, body)

		if (newPost) {
			alert(`Post created! Redirecting to post ${newPost.createPost.id}...`)
			navigate(`/post/${newPost.createPost.id}`, {
				state: {
					post: newPost.createPost
				}
			})
		}
	}

	const handleCancel = () => {
		navigate('/')
	}

	if (error) return <div>Submit Error: {error.message}</div>
	if (fetchUsersIDError)
		return <div>Fetch Error: {fetchUsersIDError.message}</div>

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
							disabled={loading}
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
							disabled={loading}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="userId">User ID</label>
						<select
							id="userId"
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
							disabled={fetchUserLoading}
						>
							{usersID?.data.map((item) => (
								<option key={String(item.id)} value={String(item.id)}>
									{item.id}
								</option>
							))}
						</select>
					</div>

					<div className="form-actions">
						<button
							type="button"
							onClick={handleCancel}
							className="button"
							disabled={loading}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="button button-submit"
							disabled={loading}
						>
							{loading ? 'Creating...' : 'Create Post'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CreatePostPage
