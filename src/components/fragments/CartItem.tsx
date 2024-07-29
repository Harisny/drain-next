import React from "react";

interface CartItemProps {
  imageSrc: string;
  name: string;
  color: string;
  size: string;
  price: number;
  inStock?: boolean;
  shippingEstimate?: string;
}

const CartItem: React.FC<CartItemProps> = ({
  imageSrc,
  name,
  color,
  size,
  price,
  inStock,
  shippingEstimate,
}) => {
  return (
    <div className="flex items-center bg-white w-[729px] rounded-[8px] p-5">
      <img className="w-24 h-24 rounded" src={imageSrc} alt={name} />
      <div className="ml-4 flex-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">
          {color} - {size}
        </p>
        <p className="text-gray-500">${price.toFixed(2)}</p>
        {inStock ? (
          <p className="text-green-500">In stock</p>
        ) : (
          <p className="text-gray-500">{shippingEstimate}</p>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <select className="border border-gray-300 rounded p-1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button className="text-gray-500 hover:text-red-500">&times;</button>
      </div>
    </div>
  );
};

export default CartItem;
