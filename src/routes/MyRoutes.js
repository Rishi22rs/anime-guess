import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PlayArea from "../pages/PlayArea";

const MyRoutes = () => (
  <Router>
    <Routes>
      <Route path={`/`} exact element={<Home />} />
      <Route path={`/playArea`} exact element={<PlayArea />} />
    </Routes>
  </Router>
);

export default MyRoutes;
