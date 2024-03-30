"use client";
import { useState, useEffect } from "react";
import Tracklist from "@/components/TrackList";
import { type Song, type Album } from "@/types";
import { get } from "@/lib/requests";

const Album = ({ params }: { params: { id: string } }) => {
  const [album, setAlbum] = useState<Album>();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    if (album?.id) {
      get(`/songsByAlbumId?albumId=${album.id}`).then((res) => setSongs(res));
    }
  }, [album?.id]);

  useEffect(() => {
    get(`/album?id=${params.id}`).then((res) => setAlbum(res));
  }, [params.id]);

  console.log(album);

  return album ? (
    <div className="pt-8 w-2/3 mx-auto">
      <Tracklist
        data={songs}
        type="专辑"
        title={album.title}
        coverImage={album.coverImage}
        creator={{
          name: album.artist.name,
          profileImage: album.artist.profileImage,
          id: album.artist.id,
        }}
      />
    </div>
  ) : null;
};

export default Album;
