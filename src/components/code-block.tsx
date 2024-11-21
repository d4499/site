import { ParentComponent } from "solid-js";

interface CodeBlockProps {
	filename?: string;
	class?: string;
}

export const CodeBlock: ParentComponent<CodeBlockProps> = (props) => {
	return (
		<div class="my-6">
			{props.filename && (
				<div class="not-prose bg-[#232137] px-4 py-2 rounded-t-md text-sm font-mono border-b border-zinc-700">
					{props.filename}
				</div>
			)}
			{props.children}
		</div>
	);
};
