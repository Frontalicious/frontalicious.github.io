import type { MetaFunction } from "@remix-run/node";
import React from "react";
import {Hero} from "../components/Hero";
import {Page} from "../components/Page";

export const meta: MetaFunction = () => {
  return [
    { title: "Frontalicious - Delicious web development" },
    { name: "description", content: "Welcome!" },
  ];
};

export default function Index() {
  return (
    <Page>
    <section id="home" className="hero">
      <Hero />
    </section>
    </Page>
  );
}
