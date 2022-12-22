import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing";

export function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}
