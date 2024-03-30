export type Album = {
  id: string;
  title: string;
  duration: string;
  coverImage: string;
  genre: string;
  releaseDate: string;
  artist: Artist;
};

export type Artist = {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
};

export type Song = {
  id: string;
  title: string;
  duration: string;
  album: Album;
  artist: Artist;
};
