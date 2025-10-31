// app/blogs/page.js

import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

// Use a client component to import Link and handle client-side navigation
// If you remove the Link component, you can use a Server Component by removing 'use client'
// import { getSortedPostsData } from '../lib/posts';

export default function BlogsPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main style={{ padding: '20px' }}>
      <h1>Blogs</h1>
      <p>This is the /blogs page and should display text **blogs**</p>
      
      <h2 style={{ marginTop: '20px' }}>Blog Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {allPostsData.map(({ slug, date, title }) => (
          <li key={slug} style={{ marginBottom: '10px' }}>
            <Link href={`/blogs/${slug}`} style={{ textDecoration: 'none', color: 'blue' }}>
              **{title}**
            </Link>
            <br />
            <small style={{ color: 'gray' }}>{date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}