import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut, FiEdit3 } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-[#EEFF25] font-extrabold uppercase tracking-wider transition-colors duration-200"
      : "text-white font-extrabold uppercase tracking-wider hover:text-[#EEFF25] transition-colors duration-200";


  const navOptions = (
    <>
      <li><NavLink to="/" end className={navLinkStyles}>Home</NavLink></li>
      <li><NavLink to="/contact" className={navLinkStyles}>Contact Us</NavLink></li>
      <li><NavLink to="/dashboard" className={navLinkStyles}>Dashboard</NavLink></li>
      <li><NavLink to="/menu" className={navLinkStyles}>Our Menu</NavLink></li>
      <li><NavLink to="/order" className={navLinkStyles}>Our Shop</NavLink></li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#151515] lg:fixed lg:left-0 lg:right-0 lg:bg-black/40 lg:backdrop-blur-md transition-all duration-300">
      <div className="navbar mx-auto max-w-7xl px-4 md:px-8 py-2">
        
       
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost p-2 text-white hover:bg-white/10 rounded-xl transition duration-200 lg:hidden mr-2"
            >
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
         
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content z-50 mt-4 w-60 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10 p-4 text-white shadow-[0_10px_35px_rgba(0,0,0,0.7)] space-y-2"
            >
              {navOptions}
          
              {!user && (
                <li><NavLink to="/login" className={navLinkStyles}>Login</NavLink></li>
              )}
            </ul>
          </div>

  
          <Link to="/" className="flex flex-col select-none leading-none tracking-tight">
            <span className="text-xl md:text-2xl font-black uppercase text-white tracking-widest font-serif">
              Bistro Boss
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.38em] text-gray-300 mt-0.5">
              Restaurant
            </span>
          </Link>
        </div>

   
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 px-1 text-sm">
            {navOptions}
          </ul>
        </div>

     
        <div className="navbar-end gap-3">
          {user ? (
         
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost btn-circle avatar ring-2 ring-[#D1A054]/70 hover:ring-[#EEFF25] transition-all duration-300 p-0.5"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-zinc-800">
                  {user?.photoURL ? (
                    <img 
                      alt="User avatar" 
                      src={user.photoURL} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-zinc-300" />
                  )}
                </div>
              </div>
              
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 z-50 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] bg-[#151515]/95 backdrop-blur-xl text-white rounded-2xl w-56 border border-white/10 divide-y divide-white/10"
              >
                <div className="px-3 py-2">
                  <p className="text-xs uppercase text-[#D1A054] font-bold tracking-wider">Signed in as</p>
                  <p className="text-sm font-semibold truncate text-zinc-100">
                    {user?.displayName || user?.email?.split('@')[0] || "Guest"}
                  </p>
                  <p className="text-[11px] text-zinc-400 truncate">{user?.email}</p>
                </div>

                <div className="py-1">
                  <li>
                    <Link 
                      to="/update-profile" 
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#EEFF25] transition-all"
                    >
                      <FiEdit3 className="text-[#D1A054] text-base" /> 
                      <span className="font-medium text-xs">Update Profile</span>
                    </Link>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      onClick={handleLogOut} 
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all w-full"
                    >
                      <FiLogOut className="text-base" /> 
                      <span className="font-medium text-xs">Sign Out</span>
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          ) : (
          
            <NavLink to="/login" className={navLinkStyles}>
              Login
            </NavLink>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;