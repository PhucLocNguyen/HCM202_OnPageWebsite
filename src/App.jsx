import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import RenderRoute from "./routes/RenderRoute";
import { privateRoutes, publicRoutes } from "./routes/Route";

function App() {
  return (
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => RenderRoute(route, index))}
          {privateRoutes.map((route, index) => RenderRoute(route, index, true))}
        </Routes>
      </Router>
  );
}

export default App;
