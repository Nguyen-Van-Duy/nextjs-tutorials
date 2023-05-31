import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href='/blog'>
        <a style={{margin: "10px"}}>Blog</a>
      </Link>
      <Link href='/test'>
        <a style={{margin: "10px"}}>Test</a>
      </Link>
      <Link href='/test'>
        <a style={{margin: "10px"}}>Item</a>
      </Link>
      <Link href='/docs'>
        <a style={{margin: "10px"}}>Docs</a>
      </Link>
      <Link href='/product'>
        <a style={{margin: "10px"}}>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home
