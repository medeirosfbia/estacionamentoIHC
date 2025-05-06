
import './App.css'
import CarRentalPage from './components/carrentalPage/CarRentalPage'
import HomePage from './components/homePage/HomePage'
import Navbar from './components/navbar/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RegisterPage from './components/registerPage/RegisterPage'
import LoginPage from './components/loginPage/LoginPage'

function App() {

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar/>
      <Navbar />
      <div className="min-h-[80vh]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrental" element={<CarRentalPage />} />
            <Route path="/register" element= {<RegisterPage />}/>
            <Route path="/login" element= {<LoginPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
