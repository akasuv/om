import Tracklist from "@/components/TrackList";
import { type Song } from "@/types";

const Mymusic = () => {
  return (
    <div className="pt-8 w-2/3 mx-auto">
      <Tracklist
        data={[]}
        type="播放列表"
        title="喜欢的音乐"
        creator={{ name: "我", profileImage: "/images/avatar.jpg" }}
      />
    </div>
  );
};

export default Mymusic;
