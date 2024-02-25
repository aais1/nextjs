import Link from 'next/link'

export const metadata = {
  titlle : "Blog",
}

export default function Setting() {
  return (
    <>
      <h1>Settings</h1>
      <Link href="/blog">Back to Blog</Link>
    </>
  );
}

