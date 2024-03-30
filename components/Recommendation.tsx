import { Disc3 } from "lucide-react";
import Link from "next/link";

const musicRec = [
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
  { name: "鲜花", pic: "/images/鲜花.jpeg", signer: "回春丹" },
];
const Recommendation = () => (
  <div className="flex flex-col">
    <div className="py-3 text-lg flex items-center gap-x-1 text-lg">
      <Disc3 />
      歌曲推荐
    </div>
    <div className="grid grid-cols-4 gap-4">
      {musicRec.map((item, index) => {
        return (
          <div className="h-50 mb-2 hover:text-orange-400" key={index}>
            <Link href="/song">
              <img src={item.pic} className="rounded h-48" />
              <p className="mt-2">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.signer}</p>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recommendation;
