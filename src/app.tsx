import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Navbar } from "./components/nav";

export default function App() {
	return (
		<Router
			root={(props) => (
				<main>
					<Navbar />
					<Suspense>
						<div class="prose prose-invert">{props.children}</div>
					</Suspense>
				</main>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
