import { useState } from "react";
import { HeartTwoTone, HeartFilled } from "@ant-design/icons";

function LikeUsers({ user }) {
  const [likedUsers, setLikedUsers] = useState([]);

  const handleLike = () => {
    if (likedUsers.includes(user.id)) {
      setLikedUsers(likedUsers.filter((id) => id !== user.id));
    } else {
      setLikedUsers([...likedUsers, user.id]);
    }
  };

  return likedUsers.includes(user.id) ? (
    <HeartFilled
      onClick={handleLike}
      style={{
        color: "red",
        fontSize: "20px",
      }}
    />
  ) : (
    <HeartTwoTone
      twoToneColor="red"
      onClick={handleLike}
      style={{
        fontSize: "20px",
      }}
    />
  );
}

export default LikeUsers;
