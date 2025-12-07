import { ApolloClient, InMemoryCache } from '@apollo/client'

const URL = process.env.API_URL

const client = new ApolloClient({
	link: URL,
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network'
		}
	}
})

export default client
