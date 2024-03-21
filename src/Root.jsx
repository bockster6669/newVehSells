import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div className=" w-[90vw] h-[90vh] bg-slate-200 rounded-md overflow-hidden shadow-xl">
      <nav className="w-full h-[10%] bg-blue-950 text-lg flex justify-around items-center text-cyan-50">
        <NavLink to="home" className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to="fav" className="cursor-pointer">
          Favourites
        </NavLink>
        <NavLink to="profile" className="cursor-pointer">
          Profile
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;
