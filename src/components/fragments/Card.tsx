import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardDemoProps {
  title: string;
  price: number;
  image: string;
  className?: string;
}

export const CardDemo: FC<CardDemoProps> = ({
  title,
  price,
  image,
  className,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "w-[234px] h-[330px] m-2 shadow-md hover:shadow-lg transition-shadow duration-300",
        className
      )}
      {...props}
    >
      <CardContent className="grid gap-4">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:scale-105">
          <img
            className="rounded-lg object-cover w-[13rem] bg-slate-100 h-[11rem] m-3"
            style={{ objectFit: "cover" }}
            src={image}
            alt={title}
          />
        </figure>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="truncate">
          You have 3 unread messages rounded-lg object-cover
        </CardDescription>
      </CardHeader>
      <div className="flex justify-between items-center p-2 m-1">
        <h1 className="text-black text-lg">Rp. {price}</h1>
        <Button className="bg-blue-500 text-white rounded-lg px-2 py-1 text-sm hover:bg-blue-600 transition-all">
          Add To Cart
        </Button>
      </div>
    </Card>
  );
};
