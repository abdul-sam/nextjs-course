const Reviews = ({ params }: {
  params: { productId: string }
}) => {
  return (
    <div>All reviews for Product { params.productId }</div>
  )
}

export default Reviews