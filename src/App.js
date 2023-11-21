import { useState } from 'react';
import './App.css'
import {vData} from './data.js'
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./asset/css/style.scss"

import Visual from './components/home/Visual.jsx';
import NavBar from './components/NavBar.jsx';
import Content from './components/home/content.jsx';
import Banner from './components/Banner.jsx';
import GalleryList from './components/home/GalleryList.jsx';
import Footer from './components/footer.jsx';
function App() {
  




  return(
    <div className="App">
     
    <NavBar/>
    <Visual/>
    <GalleryList/>
    <Content />
    <Banner/>
    <Footer/>
    </div>
  )
}
   

export default App;