import Link from 'next/link'

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

function ProductList({ productId = 100, posts }) {
  console.log("posts:", posts);
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h2>
        <Link href='product/1'>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href='product/2'>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href='product/3' replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  )
}

export default ProductList
