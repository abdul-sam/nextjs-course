import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", // absolute title that will displat as it is
  }

  // title: "Blog", // default title that will combine with the template
};

export default function Blog() {
  return (
    <h2 className="text-5xl font-bold">This is the Blog page!</h2>
  );
}