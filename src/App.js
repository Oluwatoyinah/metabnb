import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import PlaceToStay from "./Pages/PlaceToStay";

function App() {
  const [modalActive, setModalActive] = useState(false)

  const openModal = () => {
    setModalActive(true)
  }

  const closeModal = () => {
    setModalActive(false)
  }

  return (
    <>
    <Navbar openModal={openModal} />
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
