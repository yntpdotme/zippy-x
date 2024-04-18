import {Link} from 'react-router-dom';

import {hamburgerMenu} from '@assets';
import {ThemeToggler} from '@components';

const NavBar = () => {
  return (
    <>
      <nav className="relative z-10 lg:hidden">
        <div className="flex items-start justify-between border-b border-gray-100 p-4 pt-6 dark:border-primary/20">
          <div className="bg-gradient-to-r from-gray-400 to-gray-950 bg-clip-text font-palanquin text-2xl font-extrabold text-transparent dark:from-gray-600 dark:to-white">
            <Link to="/">ZippyX</Link>
          </div>
          <div className="flex items-center">
            <ThemeToggler />
            <button>
              <img
                src={hamburgerMenu}
                alt="hamburger menu"
                className="h-8 dark:invert dark:filter"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
