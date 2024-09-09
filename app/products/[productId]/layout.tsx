const ProductDetailsLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return(
    <>
      {children}
      <div>
        Featured Products
      </div>
      {/* Carousel here */}
    </>
  )
}

export default ProductDetailsLayout;