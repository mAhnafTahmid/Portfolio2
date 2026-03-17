import LargeHeader from "./LargeHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <LargeHeader />
      </div>
    </>
  );
};

export default Header;
