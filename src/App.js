import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import { useContext } from "react";
import { ThemeContext } from "./context/context";
import NavBar from "./components/navbar/NavBar";
import DropdownMenu from "./components/navbar/dropdown-menu/DropdownMenu";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <NavBar>
        <DropdownMenu/>
      </NavBar>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
