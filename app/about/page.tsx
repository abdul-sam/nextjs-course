import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the About page!',
};

export default function About() {
  return (
    <h2 className="text-5xl font-bold">This is the About page!</h2>
  );
}