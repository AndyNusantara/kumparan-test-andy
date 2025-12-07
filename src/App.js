import { ApolloProvider } from '@apollo/client/react'
import './App.css'
import client from './api/client'
import PostsList from './pages/postList/postList.tsx'

function App() {
	return (
		<ApolloProvider client={client}>
			<PostsList />
		</ApolloProvider>
	)
}

export default App
