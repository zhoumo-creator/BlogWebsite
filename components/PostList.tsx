import Link from 'next/link'
import { getAllPosts } from '../lib/api'

export default function PostList() {
  const posts = getAllPosts()

  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}