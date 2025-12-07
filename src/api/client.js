import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const URL = 'https://graphqlzero.almansi.me/api'

const client = new ApolloClient({
	link: new HttpLink({ uri: URL }),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			suspense: true
		}
	}
})

export default client
