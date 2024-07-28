import { FC } from "react";
import { CardDemo } from "@/components/fragments/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductDemoProps {
  products: Product[];
}

const ProductDemo: FC<ProductDemoProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <CardDemo
          className=""
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductDemo;
