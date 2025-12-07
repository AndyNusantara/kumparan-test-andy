export type UserType = {
	id: String
	name: String
	username: String
	email: String
	phone: String
	website: String
}

export type PaginationLinksType = {
	first: PageLimitPairType
	prev: PageLimitPairType
	next: PageLimitPairType
	last: PageLimitPairType
}

export type PageLimitPairType = {
	page: Number
	limit: Number
}

export type PostType = {
	id: String
	title: String
	body: String
	user: UserType
}

export type PostsPageType = {
	data: [PostType]
	links: PaginationLinksType
}

export type GetPostsResponse = {
	posts: PostsPageType
}
