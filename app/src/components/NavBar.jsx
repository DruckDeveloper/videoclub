import "../styles/NavBar.css";
import logo from "../assets/logo.png";
import ModalAddMovie from "./ModalAddMovie";

function NavBar() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <ModalAddMovie/>
      </header>
    </>
  );
}
export default NavBar;
