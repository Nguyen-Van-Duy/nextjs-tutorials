import React from 'react'

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST');
    const posts = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    };
  }

export default function Test({posts}) {
    console.log("post: ", posts);
  return (
    <div>{posts.sourceUrl}</div>
  )
}
