import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";
import { type Song } from "@/types";

const TracklistHeader = ({
  type,
  title,
  creator,
  totalCount,
  coverImage,
}: {
  coverImage?: string;
  type: string;
  title: string;
  creator: { name: string; profileImage: string; id: string };
  totalCount: number;
}) => (
  <div className="flex items-center gap-x-8">
    {coverImage ? (
      <img src={coverImage} className="w-[200px] h-[200px] object-cover" />
    ) : (
      <div className="bg-gradient-to-r from-orange-100 to-orange-500 w-[200px] h-[200px] flex justify-center items-center">
        <Heart fill="#fff" color="#fff" className="w-[50px] h-[50px]" />
      </div>
    )}
    <div className="flex flex-col gap-y-4">
      <div className="text-xs">{type}</div>
      <div className="text-4xl font-semibold">{title}</div>
      <Link href={`/singer/${creator.id}`}>
        <div className="flex flex-row text-xs items-center">
          <Avatar>
            <AvatarImage className="object-cover" src={creator.profileImage} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mx-2">{creator.name}</div>
          <div className="">共 {totalCount} 首</div>
        </div>
      </Link>
    </div>
  </div>
);

const Tracklist = ({
  data,
  type,
  title,
  creator,
  coverImage,
}: {
  data: Song[];
  type?: string;
  title?: string;
  coverImage?: string;
  creator?: {
    name: string;
    profileImage: string;
    id: string;
  };
}) => (
  <div className="flex flex-col gap-y-8">
    {type && title && creator && (
      <TracklistHeader
        coverImage={coverImage}
        type={type}
        title={title}
        creator={creator}
        totalCount={data.length}
      />
    )}
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>歌曲</TableHead>
          <TableHead>歌手</TableHead>
          <TableHead>专辑</TableHead>
          <TableHead className="text-right">时长</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium hover:text-orange-400">
              <Link href="/song">{item.title}</Link>
            </TableCell>
            <TableCell className="hover:text-orange-400">
              <Link href="/singer">{item.artist.name}</Link>
            </TableCell>
            <TableCell>{item.album.title}</TableCell>
            <TableCell className="text-right">{item.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Tracklist;
