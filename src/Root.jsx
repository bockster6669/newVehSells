import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="w-[90vw] h-[90vh] bg-slate-200 rounded-md overflow-hidden shadow-xl flex">
      <nav className=" bg-blue-950 text-lg flex justify-around items-center text-cyan-50">
        <NavLink to="" className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to="fav" className="cursor-pointer">
          Favourites
        </NavLink>
        <NavLink to="profile" className="cursor-pointer">
          Profile
        </NavLink>
      </nav>
      <main className="flex-1 w-full overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
