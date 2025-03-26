import { getOrder } from "@/actions/getOrder"
import DetailOrder from "./components/detailOrder"
import Container from "@/components/ui/container"

// interface OrderPageProps {
//   params: {
//     orderId: string
//   }
// }
async function OrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params
  const order = await getOrder(orderId)

  return (
    <Container>
      <DetailOrder data={order} />
    </Container>
  )
}

export default OrderPage
