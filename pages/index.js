// pages/index.js
import DefaultLayout from '../_layout/default.js'
import Link from 'next/link'
import { getConfig, getAllPosts } from '../api/index.js'

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <p>List of posts:</p>
      <ul>
        {props.posts.map(function(post, idx) {
          return (
            <li key={idx}>
              <Link href={'/posts/'+post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: "Tltel lala",
    }
  }
}
