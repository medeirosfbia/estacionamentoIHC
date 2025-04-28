
import './App.css'
import CarRentalPage from './components/carrentalPage/CarRentalPage'
import HomePage from './components/homePage/HomePage'
import Navbar from './components/navbar/Navbar'
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrental" element={<CarRentalPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
