export type UserIDType = {
	id: String
}

export type UserType = UserIDType & {
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

export type CommentType = {
	id: String
	name: String
	email: String
	body: String
}

export type CommentsType = {
	data: CommentType[]
}

export type PostType = {
	id: String
	title: String
	body: String
	user: UserType
	comments: CommentsType
}

export type PostsPageType = {
	data: PostType[]
	links: PaginationLinksType
}

export type GetPostsResponse = {
	posts: PostsPageType
}

export type GetPostResponse = {
	post: PostType
}

export type GetUsersIDResponse = {
	users: {
		data: UserIDType[]
	}
}

export type CreatePostResponse = {
	createPost: PostType
}
