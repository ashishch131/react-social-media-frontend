import "./center.css";
import Post from "../../components/post/Post";

const Center = () => {
  return (
    <div className="center">
      <div className="centerContainer">
        <div className="centerTop">
          <div className="centerTopItems">
            <img
              className="centerTopImg"
              src="https://cdn.dribbble.com/userupload/13876340/file/original-e392e3306e4cbd0161a8cddaca8f0d0d.png?resize=1024x768"
              alt=""
            />
            <input
              className="centerTopInput"
              placeholder="What's in your mind Jhon?"
              type="text"
            />
          </div>
          <hr />
          <div className="topCenterBotm">
            <div className="topCenterBotmItems">
              <i class="fa-solid fa-images" style={{color: "orange"}}></i>
              <span className="centerTopLogoTitle">Photo or Video</span>
            </div>
            <div className="topCenterBotmItems">
              <i class="fa-solid fa-tag" style={{color: "blue"}}></i>
              <span className="centerTopLogoTitle">Tag</span>
            </div>
            <div className="topCenterBotmItems">
              <i class="fa-solid fa-location-dot" style={{color: "green"}}></i>
              <span className="centerTopLogoTitle">Location</span>
            </div>
            <div className="topCenterBotmItems">
              <i class="fa-solid fa-face-smile" style={{color: "#D7A935"}}></i>
              <span className="centerTopLogoTitle">Feelings</span>
            </div>
            <button className="shareBtn">Share</button>
          </div>
        </div>

        <div className="centerBottom">
          <Post />
          <Post />
          <Post />
          <Post/>
        </div>
      </div>
    </div>
  );
};

export default Center;
