import { JSX } from "solid-js";

export default function Prose(props: { children: JSX.Element }) {
	return (
		<div class="prose prose-pre:m-0 dark:prose-invert prose-zinc prose-pre:rounded-none prose-pre:rounded-b-md min-w-full prose-code:bg-[#232137] prose-pre:bg-[#232137]">
			{props.children}
		</div>
	);
}
