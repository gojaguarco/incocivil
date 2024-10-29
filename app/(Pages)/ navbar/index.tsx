import DesktopNavBar from "./desktop";
import MobileNavBar from "./mobile";

const Navbar = () => {

  return (
    <>
      <MobileNavBar className="fixed bg-blue-300 top-0 w-full md:hidden h-[60px]" />
      <DesktopNavBar className="hidden w-full md:block" />
    </>
  );
};

export default Navbar;