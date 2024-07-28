const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 flex items-center hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-16 h-16 bg-slate-400 rounded-lg m-2 object-cover"
        alt="Product Image"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-medium text-gray-800 mb-1">Test</h3>
        <p className="text-gray-600 text-sm">paragraf</p>
      </div>
    </div>
  );
};

export default ProductCard;
