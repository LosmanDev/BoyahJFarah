import Link from 'next/link';
export const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl italic">
          Boyah J Farah <br />
          Writer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/writings">Writings</Link>
          </li>
          <li>
            <Link href="/interviews">Interviews</Link>
          </li>
          <li>
            <Link href="/adventures">Adventures</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <div className="flex lg:hidden">
          <Link href="/" className="btn btn-ghost btn-sm">
            About
          </Link>
          <Link href="/writings" className="btn btn-ghost btn-sm">
            Writings
          </Link>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <Link href="/interviews">Interviews</Link>
            </li>
            <li>
              <Link href="/adventures">Adventures</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
