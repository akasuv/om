"use client";
import "@/app/globals.css";
import Header from "@/components/Header";
import Player from "@/components/Player";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className={`${inter.className} antialiased`} */}
      <body>
        <Header />
        <div className="pt-[100px]">{children}</div>
        <Player />
        <div className="w-full py-3 mt-5">
          <div className="w-full justify-center flex">
            copy right @ooorange fish
          </div>
        </div>
      </body>
    </html>
  );
}
