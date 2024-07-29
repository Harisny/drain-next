import CartItem from "@/components/fragments/CartItem";
import OrderSummary from "@/components/fragments/OrderSummary";

const ShoppingCartPage: React.FC = () => {
  return (
    <div className="flex justify-between w-[1000px] p-2">
      <div className="space-y-2">
        <CartItem
          imageSrc="/path/to/image1.jpg"
          name="Basic Tee"
          color="Sienna"
          size="Large"
          price={32.0}
          inStock={true}
        />
        <CartItem
          imageSrc="/path/to/image1.jpg"
          name="Basic Tee"
          color="Sienna"
          size="Large"
          price={32.0}
          inStock={true}
        />
        <CartItem
          imageSrc="/path/to/image1.jpg"
          name="Basic Tee"
          color="Sienna"
          size="Large"
          price={32.0}
          inStock={true}
        />
        <CartItem
          imageSrc="/path/to/image1.jpg"
          name="Basic Tee"
          color="Sienna"
          size="Large"
          price={32.0}
          inStock={true}
        />
        <CartItem
          imageSrc="/path/to/image1.jpg"
          name="Basic Tee"
          color="Sienna"
          size="Large"
          price={32.0}
          inStock={true}
        />
        <CartItem
          imageSrc="/path/to/image2.jpg"
          name="Basic Tee"
          color="Black"
          size="Large"
          price={32.0}
          inStock={false}
          shippingEstimate="Ships in 3–4 weeks"
        />
        <CartItem
          imageSrc="/path/to/image2.jpg"
          name="Basic Tee"
          color="Black"
          size="Large"
          price={32.0}
          inStock={false}
          shippingEstimate="Ships in 3–4 weeks"
        />
        <CartItem
          imageSrc="/path/to/image2.jpg"
          name="Basic Tee"
          color="Black"
          size="Large"
          price={32.0}
          inStock={false}
          shippingEstimate="Ships in 3–4 weeks"
        />
        <CartItem
          imageSrc="/path/to/image2.jpg"
          name="Basic Tee"
          color="Black"
          size="Large"
          price={32.0}
          inStock={false}
          shippingEstimate="Ships in 3–4 weeks"
        />
        {/* Add more CartItem components as needed */}
      </div>
      <div>
        <OrderSummary
          subtotal={99.0}
          shipping={5.0}
          tax={8.32}
          total={112.32}
        />
      </div>
    </div>
  );
};

export default ShoppingCartPage;
