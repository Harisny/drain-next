import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/elements/ProductCard";

export default function Desserts() {
  return (
    <>
      <div>
        <div className="block">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-lg shadow-md">
            <h1 className="font-bold text-2xl tracking-tight text-white mb-2 text-center">
              Our Main Desserts!
            </h1>
          </div>
          <div className="overflow-y-scroll h-[476px] w-[470px] bg-slate-100 custom-scrollbar p-7 mt-4">
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
                <CarouselItem className="">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="">
                  <ProductCard />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
