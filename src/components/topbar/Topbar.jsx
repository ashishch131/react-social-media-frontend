import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topContainer">
        <div className="topLeft">
          <span className="logo">Logo</span>
        </div>
        <div className="topCenter">
          <div className="searchInputItems">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="searchInput"
              placeholder="Search for friends, Post or Videos"
            />
          </div>
        <div className="topLinks">
          <span className="topLink">Homepage</span>
          <span className="topLink">Timeline</span>
        </div>
        </div>
        <div className="topRight">
          <div className="topRightItems">
            <div className="topRightItem">
              <i class="fa-solid fa-user"></i>
              <span className="iconBadge">1</span>
            </div>
            <div className="topRightItem">
              <i class="fa-solid fa-message"></i>
              <span className="iconBadge">2</span>
            </div>
            <div className="topRightItem">
              <i class="fa-solid fa-bell"></i>
              <span className="iconBadge">1</span>
            </div>
          </div>
            <img
              src="https://cdn.dribbble.com/userupload/13908160/file/original-be9901abb41d15d4e9ff80bb16049f72.jpg?resize=1024x768"
              alt=""
              className="profileImg"
            />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
