"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const titles = [
  { name: "发现音乐", link: "/" },
  { name: "我的音乐", link: "/myMusic" },
  { name: "所有歌手", link: "/singers" },
  { name: "成为音乐人", link: "/becomeSinger" },
];
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className="flex flex-row justify-between items-center shadow py-6 fixed w-full bg-white z-50">
      <div className="flex flex-row w-90 md:font-bold ml-[60px] text-lg items-center gap-x-2">
        <img src="/images/orange.png" className="h-10" />
        橘子音乐
      </div>
      <div className="w-200 flex flex-row justify-between gap-x-8 items-center">
        {titles.map((item, key) => {
          return (
            <div className="relative">
              <a
                key={key}
                className={clsx("hover:text-primary", {
                  "text-primary": pathname === item.link,
                })}
                href={item.link}
              >
                {item.name}
              </a>
              {pathname === item.link && (
                <p className="absolute w-full h-0.5 bg-primary -bottom-1 left-0"></p>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Input
          placeholder="搜索歌曲/歌手/专辑"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={() => router.push(`/search?query=${searchInput}`)}>
          搜索
        </Button>
      </div>
      <div className="flex flex-row gap-x-2">
        <Avatar className="">
          <AvatarImage src="/images/头像.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Dialog>
          <DialogTrigger asChild className="mr-11">
            <Button variant="outline" asChild>
              <Link href="/login">登录</Link>
            </Button>
            {/* <Button>登录</Button> */}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>登录</DialogTitle>
              <DialogDescription>请输入账号和密码登录</DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 py-4">
              <div className="flex flex-row items-center gap-3">
                <Input
                  id="name"
                  defaultValue="支持qq/邮箱/手机号码登录"
                  className="col-span-3"
                />
              </div>
              <div className=" items-center gap-3">
                <Input
                  id="username"
                  defaultValue="请输入密码"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">登录</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
