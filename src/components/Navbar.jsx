import airbnbLogo from "../imgs/airbnb-logo.png";

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={airbnbLogo} alt="airbnb logo" />
    </nav>
  );
}

export default Navbar;
