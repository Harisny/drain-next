import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../elements/ProductCard";

const SideBody = () => {
  return (
    <>
      <article className="block bg-blue-200 p-6 h-auto w-screen">
        <div className="relative w-full rounded-lg  flex items-start mb-4 shadow-md">
          <input
            className="w-full focus:outline-none focus:ring-2 focus:ring-blue-200  rounded-lg pl-10 pr-3 py-2"
            type="text"
            placeholder="Search products..."
          />
        </div>
        <div className="overflow-y-scroll h-[248px] w-[300px] custom-scrollbar">
          <Carousel orientation="vertical">
            <CarouselContent>
              <CarouselItem className="">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="">
                <ProductCard />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </article>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default SideBody;
