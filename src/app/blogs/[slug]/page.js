// app/blogs/[slug]/page.js

import { getPostData, getSortedPostsData } from '@/lib/posts';

// This function is required to tell Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  let paths = posts.map((post) => ({
    slug: post.slug,
  }));
  
  return paths;
}

export default async function Post({ params }) {
    params = await params;

  const postData = await getPostData(params.slug);

  console.log(params)
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{postData.title}</h1>
      <p style={{ color: 'gray' }}>{postData.date}</p>
      
      {/* Set the HTML converted from Markdown */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      
      <p style={{ marginTop: '40px' }}><a href="/blogs">← Back to Blog List</a></p>
    </main>
  );
}