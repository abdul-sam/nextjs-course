export default function ProductDetails( {
  params 
}: { 
  params: { productId: string } 
} ) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.productId}</p>
    </div>
  );
}