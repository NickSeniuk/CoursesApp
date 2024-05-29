import Button from "../../common/Button.jsx";
import Logo from "../Header/components/Logo/Logo.jsx";
import "../Header/headerStyles.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerContent">
          <Logo />
          <Button buttonText="Logout" />
        </div>
      </div>
    </>
  );
}

export default Header;
