import React from "react";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  tax,
  total,
}) => {
  return (
    <div className="bg-white p-8 rounded shadow-md lg:sticky lg:top-4">
      <h2 className="text-2xl font-bold mb-6">Order summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping estimate</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax estimate</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Order total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
