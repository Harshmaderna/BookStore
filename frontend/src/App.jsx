import { Link, Outlet } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Home />
     
      <main>
        <Outlet />
      </main> 
       </div>
    </>
  );
};

export default App;
