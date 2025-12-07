import { gql } from '@apollo/client'

export const GET_POSTS = gql`
	query GetPosts($page: Int, $limit: Int) {
		posts(options: { paginate: { page: $page, limit: $limit } }) {
			data {
				id
				title
				body
				user {
					name
				}
			}
			links {
				prev {
					page
					limit
				}
				next {
					page
					limit
				}
			}
			meta {
				totalCount
			}
		}
	}
`

export const GET_POST = gql`
	query GetPost($id: ID!) {
		post(id: $id) {
			id
			title
			body
			user {
				id
				name
				email
			}
			comments {
				data {
					id
					name
					email
					body
				}
			}
		}
	}
`

export const GET_USERS_ID = gql`
	query GetUsers {
		users {
			data {
				id
			}
		}
	}
`

export const CREATE_POST = gql`
	mutation CreatePost($input: CreatePostInput!) {
		createPost(input: $input) {
			id
			title
			body
			user {
				id
				name
			}
		}
	}
`
