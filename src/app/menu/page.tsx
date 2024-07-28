import { CardMenuDemo } from "@/components/fragments/CardMenu";
import Link from "next/link";

export default function MenuPage() {
  return (
    <>
      <div className="block items-center">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 py-4 rounded-lg w-11/12 shadow-md mx-auto mt-2">
          <h1 className="font-bold text-3xl tracking-tight text-white text-center">
            Discover Our Delicious Menu
          </h1>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="w-11/12 bg-slate-200 p-6 rounded-[20px] shadow-lg">
            <section className="flex flex-wrap justify-center space-y-4">
              <div className="w-full flex justify-around flex-wrap gap-6">
                <Link href="/foods" passHref>
                  <CardMenuDemo
                    title="Foods"
                    image="/path/to/food-image.jpg"
                    className="hover:scale-105 transform transition duration-300"
                  />
                </Link>
                <Link href="/sides" passHref>
                  <CardMenuDemo
                    title="Sides"
                    image="/path/to/sides-image.jpg"
                    className="hover:scale-105 transform transition duration-300"
                  />
                </Link>
                <Link href="/drinks" passHref>
                  <CardMenuDemo
                    title="Drinks"
                    image="/path/to/drinks-image.jpg"
                    className="hover:scale-105 transform transition duration-300"
                  />
                </Link>
                <Link href="/desserts" passHref>
                  <CardMenuDemo
                    title="Desserts"
                    image="/path/to/desserts-image.jpg"
                    className="hover:scale-105 transform transition duration-300"
                  />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
