import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightContainer">
        <i
          class="fa-solid fa-gift"
          style={{ color: "red", fontSize: "25px" }}
        ></i>
        <span style={{ fontSize: "14px" }}>
          <b> Ashish Chauhan </b>and <b>3 other friends</b> have a birthday
          today
        </span>

        <img
          className="advertise"
          src="https://cdn.dribbble.com/userupload/13932624/file/original-e5227baa91eccfb0b5eb8f6e6758270d.png?resize=1024x828"
          alt=""
        />
        <div className="rightBottom">
          <span className="rightBtmTitle">Online Friends</span>
          <div className="rightBtmItems">
            <img
              src="https://cdn.dribbble.com/userupload/2583049/file/original-22018cef6a9ea8c1af9d50be5cc8651c.png?resize=1024x768"
              alt=""
              className="onlineImg"
            />
            <span className="onlineFrndName">Don Jhon</span>
          </div>
          <div className="rightBtmItems">
            <img
              src="https://cdn.dribbble.com/userupload/2583049/file/original-22018cef6a9ea8c1af9d50be5cc8651c.png?resize=1024x768"
              alt=""
              className="onlineImg"
            />
            <span className="onlineFrndName">Don Jhon</span>
          </div>
          <div className="rightBtmItems">
            <img
              src="https://cdn.dribbble.com/userupload/2583049/file/original-22018cef6a9ea8c1af9d50be5cc8651c.png?resize=1024x768"
              alt=""
              className="onlineImg"
            />
            <span className="onlineFrndName">Don Jhon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
