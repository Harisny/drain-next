import { FC } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardDemoProps {
  title: string;
  image: string;
  className?: string;
}

export const CardMenuDemo: FC<CardDemoProps> = ({
  title,
  image,
  className,
  ...props
}) => {
  return (
    <Card
      className={cn("relative w-[234px] h-[330px] m-2", className)}
      {...props}
    >
      <CardContent className="absolute inset-0">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-xl">{title}</CardTitle>
          </CardHeader>
        </div>
      </CardContent>
    </Card>
  );
};
