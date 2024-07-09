//imports
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={230} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-grey"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="aspect-square max-lg:block hidden">
          <img src={hamburger} alt="menu btn" width={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
