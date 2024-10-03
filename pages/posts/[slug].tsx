import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'

export default function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>加载中...</div>
  }

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    props: { post }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: false
  }
}