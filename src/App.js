import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import React from 'react';
import Login from "./components/Login";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Detail from './components/Detail';
import Contacts from './components/Contacts';
import Liked from './components/Liked';
import Flats from './components/Flats';
import Bunglows from './components/Bunglows';
import Villas from './components/Villas';
import PG from './components/PG';



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
  const isDetailPage = location.pathname.includes('/Detail'); // Check if current path includes '/Detail'

  return (
    <div className="App">
      {!isLoginPage && !isDetailPage && <Header />}
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Detail/:id" component={Detail}></Route>
        <Route path="/Contacts" component={Contacts}></Route>
        <Route path="/Liked" component={Liked}></Route>
        <Route path="/Flats" component={Flats}></Route>
        <Route path="/Bunglows" component={Bunglows}></Route>
        <Route path="/Villas" component={Villas}></Route>
        <Route path="/PG" component={PG}></Route>
      </Switch>
      {!isLoginPage && !isDetailPage && <Footer />}
    </div>
  );
}

export default App;
