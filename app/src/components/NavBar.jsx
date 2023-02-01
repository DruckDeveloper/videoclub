import "../styles/NavBar.css";
import logo from "../assets/logo.png";
import ModalAddMovie from "./ModalAddMovie";
import AddMovie from "./AddMovie";

// Navbar component
function NavBar({add}) {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        {/* ModalAddMovie with add functionality as a pop */}
        <ModalAddMovie add={add}/>
      </header>
    </>
  );
}
export default NavBar;
