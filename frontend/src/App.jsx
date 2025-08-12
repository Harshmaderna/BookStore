import { Link, Outlet } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Home />
      <main>
        <Outlet />
      </main> 
    </>
  );
};

export default App;
