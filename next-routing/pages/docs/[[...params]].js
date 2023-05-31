import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Doc({posts}) {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params, posts)
  
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  } else {
    return <h1>Docs Home Page</h1>

  }

}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST')
  console.log(res);
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Doc
