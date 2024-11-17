import { For } from "solid-js";

const navItems = [
	{
		label: "Work",
		href: "/work",
	},
	{
		label: "Blog",
		href: "/blog",
	},
];

export function Navbar() {
	return (
		<div class="my-8 flex justify-between items-center">
			<div class="flex gap-4 items-center">
				<div class="h-8 w-1 bg-indigo-500 rounded" />
				<a href="/">Dalton Bennyhoff</a>
			</div>
			<div class="flex gap-4 ">
				<For each={navItems}>
					{(item) => (
						<a href={item.href} class="hover:text-indigo-500">
							{item.label}
						</a>
					)}
				</For>
			</div>
		</div>
	);
}
