import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import History from "./Pages/History";
import DefaultLayout from "./layouts/DefaultLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default Router;
