import { For } from "solid-js";
import { posts } from "~/data/posts";

export default function BlogPosts() {
	return (
		<div>
			<For each={posts}>
				{(post) => <a href={`/posts/${post.slug}`}>{post.slug}</a>}
			</For>
		</div>
	);
}
