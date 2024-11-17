/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mono: "geist mono",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
