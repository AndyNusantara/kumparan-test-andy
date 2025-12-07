import { ApolloProvider } from '@apollo/client/react'
import client from './api/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

function App() {
	return (
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	)
}

export default App
