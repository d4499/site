import JSONPosts from "./posts.json";
type Post = {
	title: string;
	date: string;
	slug: string;
};
export const posts: Post[] = JSONPosts;
