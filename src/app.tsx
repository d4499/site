import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Navbar } from "./components/nav";
import Prose from "./components/prose";

export default function App() {
	return (
		<Router
			root={(props) => (
				<main>
					<Navbar />
					<Suspense>
						<Prose>{props.children}</Prose>
					</Suspense>
				</main>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
