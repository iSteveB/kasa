import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <Logo size='large' color='#FF6060'/>
      <Navigation />
    </header>
  );
};

export default Header;