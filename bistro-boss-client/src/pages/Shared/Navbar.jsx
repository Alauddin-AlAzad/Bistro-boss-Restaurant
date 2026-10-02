import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navOptions = (
    <>
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/menu">Our Menu</NavLink></li>
      <li><NavLink to="/order">Order Food</NavLink></li>
      <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#151515] mb-1 lg:mb-0 text-white lg:fixed lg:left-0 lg:right-0 lg:bg-[#151515]/50 lg:backdrop-blur-xs">
      <div className="navbar mx-auto max-w-7xl px-2 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2 text-white lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 text-black shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="flex flex-col px-2 leading-tight">
            <span className="text-lg font-bold uppercase md:text-2xl">Bistro Boss</span>
            <span className="text-xs uppercase tracking-[0.3em]">Restaurant</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold uppercase">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/login" className="btn btn-sm btn-warning md:btn-md">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;