import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <h2 className="text-5xl font-bold">Welcome Home!</h2>
    </>
  );
}
