import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo and Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Karan&nbsp;<span className="sm:block hidden">| Panchal</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[20px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          
          {/* Animated Mobile Menu */}
          <div
            className={`absolute top-20 right-4 min-w-[140px] p-6 rounded-xl z-10 transition-all duration-300 ease-in-out
              ${toggle ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'}
              black-gradient`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
