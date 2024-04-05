import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTopItems">
          <div className="postTopItem">
            <img
              src="https://cdn.dribbble.com/userupload/13921790/file/original-8258e88590315c8ea2bff63236f783b0.png?resize=1024x768"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">Ashish</span>
            <span className="posttime">5 min ago</span>
          </div>
          <i class="fa-solid fa-ellipsis-vertical" style={{cursor: "pointer"}}></i>
        </div>
        <h2 className="postTitle">Hey, Good morning!</h2>
        <div className="postImgContainer">
          <img
            className="postImg"
            src="https://cdn.dribbble.com/userupload/13927044/file/original-8f3441bb7c1093614ec1fb06d612fd6c.jpg?crop=239x655-1752x1789&resize=320x240&vertical=center"
            alt=""
          />
        </div>
        <div className="postBottomItems">
          <div className="postLikes">
            <i class="fa-solid fa-thumbs-up" style={{color: "#1876F3", fontSize: "25px", cursor: "pointer"}}></i>
            <i class="fa-solid fa-heart" style={{color: "#E74D6E", fontSize: "25px", cursor: "pointer"}}></i>
            <span className="likeCount">32 people like it</span>
          </div>
          <div className="comments">
            <span className="comment">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
