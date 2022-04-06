import { Link } from "react-router-dom";
import { Header, Leaderboard, Contribute, Contact } from "../components";

const Home = () => {
  return (
    <div
      id="play"
      className="home-container d-flex flex-column align-items-center justify-content-center "
    >
      <Header />
      <div className="home-play parallax d-flex flex-column align-items-center justify-content-center pb-5">
        <div className="d-flex flex-column align-items-center justify-content-center p-3 pb-4 cont">
          <h1 className="text-green heading mb-5 text-shadow">Guess So</h1>
          <p
            className="text-center px-3 home-play-desc fs-5 text-green"
            style={{ maxWidth: 600 }}
          >
            Laboris aliquip anim tempor est magna et enim proident eiusmod
            commodo velit Lorem officia est. Nulla amet excepteur nulla dolor
            fugiat sint. Dolore eu et veniam voluptate tempor proident excepteur
            voluptate nostrud occaecat cupidatat.
          </p>
          <Link to="playArea" className="custom-btn p-2 mt-5 px-5">
            Play
          </Link>
        </div>
      </div>
      <Leaderboard />
      <Contribute />
      <Contact />
    </div>
  );
};

export default Home;
