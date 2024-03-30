import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";

const newRec = [
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
];

const NewSongs = () => (
  <div>
    <div className="py-3 text-lg flex items-center gap-x-1 text-lg">
      <Music /> 新歌上架
    </div>
    <div className="border-gray-100 border-[1px] p-2 rounded">
      <Carousel
        opts={{
          align: "start",
        }}
        className=""
      >
        <CarouselContent>
          {newRec.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <img src={item.pic} className="" />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
);

export default NewSongs;
