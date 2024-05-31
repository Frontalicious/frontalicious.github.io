import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Frontalicious - Delicious Web Applications" },
		{
			name: "description",
			content: "Front-end Web development, specialized in React development",
		},
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Frontalicious.nl</h1>
			Come back soon
		</div>
	);
}
