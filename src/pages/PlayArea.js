import { useEffect, useState } from "react";
import * as apiCall from "../api/apiCall";

import haku from "../assets/haku.jpg";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import ghost from "../assets/ghost.png";

let except = [];

const PlayArea = () => {
  const [data, setData] = useState();
  const [result, setResult] = useState(true);

  const getRandomCharactar = () => {
    apiCall.postData({ except }, "getRandomCharactar").then((res) => {
      except.push(res.result[0]?.uid);
      setData(res.result[0]);
    });
  };

  const checkAnswer = (uid, gender) => {
    apiCall.postData({ uid, gender }, "checkAnswer").then((res) => {
      console.log(res.gender, gender);
      if (res.gender === gender) getRandomCharactar();
      else setResult(false);
    });
  };

  useEffect(() => {
    getRandomCharactar();
  }, []);

  return (
    <div className="playarea-container d-flex flex-column align-items-center justify-content-center parallax pb-5 w-100">
      <h1 className="text-green display-1 text-shadow">Guess So</h1>
      <div
        className="parallax d-flex flex-column align-items-center justify-content-center  cont mt-5"
        style={{ maxWidth: 600 }}
      >
        <h3 className="text-green display-3 text-shadow">Current score: 39</h3>
        <img src={haku} alt="character" />
        <div className="d-flex m-3">
          <span className="option-span p-2 ">
            <img className="play-btn" src={boy} alt="male" />
            <p className="text-center span-text">Male</p>
          </span>
          <span className="option-span p-2">
            <img className="play-btn" src={girl} alt="female" />
            <p className="text-center span-text">Female</p>
          </span>
          <span className="option-span p-2">
            <img className="play-btn" src={ghost} alt="unknown" />
            <p className="text-center span-text">Unidentified</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayArea;
