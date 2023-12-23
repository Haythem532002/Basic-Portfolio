import About from "./About";
import "./App.css";
import Client from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import Portfo from "./Portfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav></Nav>
        <Landing></Landing>
        <About></About>
        <Portfo></Portfo>
        <Client></Client>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default App;
