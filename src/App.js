import { Route,Routes} from "react-router";
import Home from "./components/Home";
import Menus from "./components/Menus"
import Commande from "./components/Commande"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Menu from "./components/menu";
import Merci from "./components/Merci";
import Reservation from "./components/Reservation";

function App() {
  return (
    <>
    <Nav></Nav>
    <Routes>

      <Route path='/ReactProject/' element={<Home/>} />
      <Route path='/ReactProject/Home/' element={<Home/>} />
      <Route path='/ReactProject/Menus/*' element={<Menus/>} />
      <Route path='/ReactProject/Commande/' element={<Commande/>} />
      <Route path='/ReactProject/Merci/' element={<Merci/>} />
      <Route path='/ReactProject/Reservation/' element={<Reservation/>} />
    </Routes>
    <Footer></Footer>
    </>
   
    
  );
}
export default App