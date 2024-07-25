import { BellRing, Check } from "lucide-react";

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

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[234px] h-[330px] m-2", className)} {...props}>
      <CardContent className="grid gap-4">
        <figure className=" relative max-w-sm transition-all duration-300 cursor-pointer ">
          <img
            className="rounded-lg object-cover w-[13rem] bg-slate-100 h-[11rem] m-3"
            // src={srcimg}
            alt="image description"
          ></img>
        </figure>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">Notifications</CardTitle>
        <CardDescription>
          You have 3 unread messages rounded-lg object-cover{" "}
        </CardDescription>
      </CardHeader>
      <Button className="">
        <Check className="" /> Add To Cart
      </Button>
    </Card>
  );
}
