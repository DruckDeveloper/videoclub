import "../styles/NavBar.css";
import logo from "../assets/logo.png";
import ModalAddMovie from "./ModalAddMovie";
import AddMovie from "./AddMovie";

function NavBar({add}) {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <ModalAddMovie add={add}/>
      </header>
    </>
  );
}
export default NavBar;
