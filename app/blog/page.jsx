import Link from "next/link"

export const metadata = {
  titlle : "Blog",
}

export default function Blog() {
  return (
    <>
     <div className="flex flex-col space-y-4">
      <h1>Blog</h1>
      <Link href="/blog/setting">Setting</Link>
      <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}

