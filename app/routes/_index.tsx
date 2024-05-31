import React from "react";
import { Hero } from "../components/Hero";
import { Page } from "../components/Page";

export default function Index() {
	return (
		<Page>
			<section id="home" className="hero">
				<Hero />
			</section>
		</Page>
	);
}
