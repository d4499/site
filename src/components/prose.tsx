import { JSX } from "solid-js";

export default function Prose(props: { children: JSX.Element }) {
	return (
		<div class="prose prose-pre:m-0 dark:prose-invert prose-zinc prose-code:rounded-b-lg prose-pre:rounded-none">
			{props.children}
		</div>
	);
}
