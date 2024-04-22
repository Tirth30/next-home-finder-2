import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import React from 'react';
import Login from "./components/Login";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Detail from './components/Detail';
import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import ContactsAdd from "./components/ContactsAdd";
import Liked from './components/Liked';
import Flats from './components/Flats';
import Bunglows from './components/Bunglows';
import Villas from './components/Villas';
import PG from './components/PG';
import FlatDetail from './components/FlatDetails';
import BunglowDetail from './components/BunglowsDetail';
import VillaDetail from './components/VillaDetail';
import PGDetail from './components/PGDetail';
import Signup from './components/signup';
//import AddProducts from './components/addproperty'; // Import AddProducts only once


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isSignupPage = location.pathname === '/signup';
  const isDetailPage = location.pathname.includes('/Detail'); // Check if current path includes '/Detail'

  return (
    <div className="App">
      {!isLoginPage && !isDetailPage && !isSignupPage &&<Header />}
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/contactAdd" component={ContactsAdd}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Detail/:id" component={Detail}></Route>
        <Route path="/FlatDetail/:id" component={FlatDetail}></Route>
        <Route path="/BunglowsDetail/:id" component={BunglowDetail}></Route>
        <Route path="/VillaDetail/:id" component={VillaDetail}></Route>
        <Route path="/PGDetail/:id" component={PGDetail}></Route>
        <Route path="/Contacts" component={Contacts}></Route>
        <Route path="/Liked" component={Liked}></Route>
        <Route path="/Flats" component={Flats}></Route>
        <Route path="/Bunglows" component={Bunglows}></Route>
        <Route path="/Villas" component={Villas}></Route>
        <Route path="/PG" component={PG}></Route>
      </Switch>
      {!isLoginPage && !isDetailPage && !isSignupPage &&<Footer />}
    </div>
  );
}

export default App;
