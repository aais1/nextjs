import Link from 'next/link'

export const metadata = {
  titlle : "Next JS",
  description : "Next JS is a React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG"
}

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <Link href="/blog">Blog</Link>
    </>
  );
}
