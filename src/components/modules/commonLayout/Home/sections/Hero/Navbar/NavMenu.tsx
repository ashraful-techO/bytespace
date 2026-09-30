import { Handbag } from "lucide-react";

const NavMenu = () => {
  return (
    <nav className="w-52.5">
      <ul className="flex gap-6 text-sm">
        <li className="">Sign in</li>
        <li>Join Us</li>
        <li>
          <Handbag height={24} width={24} />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
