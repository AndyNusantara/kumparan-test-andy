import { createBrowserRouter } from 'react-router-dom'
import PostsList from '../pages/postList/index.tsx'
import CreatePostPage from '../pages/createPost/index.tsx'
import PostDetailPage from '../pages/postDetail/index.tsx'
import Layout from '../Layout.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <PostsList />
			},
			{
				path: 'post/create',
				element: <CreatePostPage />
			},
			{
				path: 'post/:id',
				element: <PostDetailPage />
			}
		]
	}
])
