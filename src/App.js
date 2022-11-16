import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import MobileNav from "./Components/MobileNav";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import PlaceToStay from "./Pages/PlaceToStay";

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [navActive, setNavActive] = useState(false)

  const openModal = () => {
    setModalActive(true)
    setNavActive(false)
  }

  const closeModal = () => {
    setModalActive(false)
  }

  const openNav = () => {
    setNavActive(true) 
  }

  const closeNav = () => {
    setNavActive(false) 
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <MobileNav navActive={navActive} closeNav={closeNav} openModal={openModal} />
      <Navbar openModal={openModal} openNav={openNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place-to-stay' element={<PlaceToStay />} />
      </Routes>
      <Footer />
      {
        modalActive && <Modal closeModal={closeModal} />
      }
    </>
  );
}

export default App;
