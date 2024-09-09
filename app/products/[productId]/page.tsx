import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  // Use async to fetch data from an API 
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Product Details - ${params.productId}`);
    }, 1000);
  });

  return {
    title: `${title}`,
  };
}


export default function ProductDetails( { params }: Props) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.productId}</p>
    </div>
  );
}