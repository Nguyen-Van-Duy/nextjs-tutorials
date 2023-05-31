import Link from 'next/link'
import { useRouter } from 'next/router'

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId
  console.log("productId: ", productId);
  return <>
  <h1>Details about product {productId}</h1>
  {productId && <Link href={`${productId}/review/123`}>Review</Link>}
  </>
}

export default ProductDetail
