import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Services} from "./pages/Services";
import {Navbar} from "./components/Navbar";
import {Error} from "./pages/Error";
import {Footer} from "./components/footer";
import { Logout } from "./pages/Logout";

const App = () => {
  return <>
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />}/>
      <Route path="/register" element = {<Register />}/>
      <Route path="/login" element = {<Login />}/>
      <Route path="/logout" element = {<Logout />} />
      <Route path="/service" element = {<Services />}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
    
    </BrowserRouter>
    <Footer />
  </>
};

export default App;