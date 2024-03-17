import { useState } from "react";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import VehView from "./pages/VehView";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className=" w-[90vw] h-[90vh] bg-slate-200 rounded-md overflow-hidden">
      <nav className="w-full h-[10%] bg-blue-950 text-lg flex justify-around items-center text-cyan-50">
        <Link to="/main" className="cursor-pointer">
          Main
        </Link>
        <Link to="/fav" className="cursor-pointer">
          Favourites
        </Link>
        <Link to="/profile" className="cursor-pointer">
          Profile
        </Link>
      </nav>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/fav" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="VehView" element={<VehView />} />
      </Routes>
    </div>
  );
}

export default App;
