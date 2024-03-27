import { NavLink, Outlet, useNavigation } from "react-router-dom";
import { navLinks } from "./assets/data";
import Header from "./components/Header";

function Root() {
  const navigation = useNavigation();
  return (
    <div className="w-[90vw] h-[90vh] bg-slate-200 rounded-md overflow-hidden shadow-xl flex">
      <nav className=" bg-[#0c0a09] text-lg text-cyan-50 border-box p-2 w-[200px]">
        <ul className=" space-y-4 ">
          {navLinks.map((obj) => (
            <li key={obj.path} className="flex">
              <NavLink
                to={`${obj.path}`}
                className={
                  ({ isActive, isPending }) =>
                    "px-4 py-2 rounded-sm text-xl flex-1" + // Apply general padding first
                    (isActive ? " active" : "") // Add "active" class if active
                  // (isPending ? " pending" : "") // Add "pending" class if pending
                }
              >
                <div className="flex items-center">
                  {obj.text}
                  {/* {navigation.state == "loading" ? (
                    <div className="loader"></div>
                  ) : null} */}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className={`overflow-auto relative flex-1 ${navigation.state == "loading" ? "loading" : null}`}>
        <Header />
        <Outlet />
        {/* {navigation.state == "loading" ? <div className="loader"></div */}
      </main>
    </div>
  );
}

export default Root;
