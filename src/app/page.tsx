import ProductDemo from "@/components/fragments/ProductHome";

async function getDataProducts() {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const dataProducts = await getDataProducts();
  // console.log(dataProducts);
  return (
    <div className="flex flex-wrap">
      <ProductDemo products={dataProducts.data} />
    </div>
  );
}
