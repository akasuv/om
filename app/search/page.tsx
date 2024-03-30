"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { get } from "@/lib/requests";
import { Artist, Song, Album } from "@/types";

const singer = [
  { name: "周杰伦", pic: "/images/心.avif", type: "男歌手" },
  { name: "周杰伦", pic: "/images/心.avif", type: "男歌手" },
  { name: "周杰伦", pic: "/images/心.avif", type: "男歌手" },
];
const singerSong = [
  { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: "08:06" },
  { name: "秋分", singer: "蛙池", album: "郊游", time: "04:05" },
  { name: "爱是昂贵的", singer: "声音玩具", album: "劳动之余", time: "3:05" },
];

const SearchNew = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [playIndex, setPlayIndex] = useState(-1);
  const [adding, setAdding] = useState(-1);
  const [songs, setSongs] = useState<Song[]>([]);
  const [singers, setSingers] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    get(`/search?name=${query}`).then((res) => {
      const songs = res.filter((item: any) => item.type === "song");
      const singers = res.filter((item: any) => item.type === "artist");
      const albums = res.filter((item: any) => item.type === "album");

      setSongs(songs);
      setSingers(singers);
      setAlbums(albums);
    });
  }, [query]);

  return (
    <div className="flex justify-center">
      <div className="">
        <p className="text-lg font-bold">歌手</p>
        <div className="mt-8">
          {singers.map((item) => {
            return (
              <Link
                key={item.name}
                href={"/singer/" + item.id}
                className="font-bold w-fit"
              >
                <div className="w-fit flex flex-col items-center gap-y-4">
                  <Avatar className="w-[100px] h-[100px]">
                    <AvatarImage
                      className="object-cover"
                      src={item.profileImage}
                    />
                    <AvatarFallback>{item.name}</AvatarFallback>
                  </Avatar>
                  <div>{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-16">
          <div className="text-lg flex flex-row ml-2 my-3 font-bold">
            单曲精选 <img src="/images/可爱的.png" className="w-7 h-7 ml-4" />
          </div>
          <div className="w-[1000px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>歌曲</TableHead>
                  <TableHead>专辑</TableHead>
                  <TableHead className="text-right">时长</TableHead>
                  <TableHead className="w-[130px] "> </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {singerSong.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>

                    <TableCell className="font-medium hover:text-orange-400">
                      <Link href="/song">{item.name}</Link>
                    </TableCell>
                    <TableCell>{item.album}</TableCell>
                    <TableCell className="text-right">{item.time}</TableCell>
                    <TableCell className=" flex flex-row gap-x-4">
                      <div
                        className="w-6"
                        onMouseEnter={() => setPlayIndex(index)}
                        onMouseLeave={() => setPlayIndex(-1)}
                      >
                        {playIndex == index ? (
                          <img className="w-6" src="/images/播放.png" />
                        ) : (
                          <img className="w-56" src="/images/暂停黑.png" />
                        )}
                      </div>

                      <div
                        className="w-6"
                        onMouseEnter={() => setAdding(index)}
                        onMouseLeave={() => setAdding(-1)}
                      >
                        {adding == index ? (
                          <img className="w-6" src="/images/加橙.png" />
                        ) : (
                          <img className="w-56" src="/images/加黑.png" />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNew;
