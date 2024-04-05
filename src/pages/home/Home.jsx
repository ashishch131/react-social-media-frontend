import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Center from "../../components/center/Center";
import Rightbar from "../../components/rightbar/Rightbar";
const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Center />
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home
