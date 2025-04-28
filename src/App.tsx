
import './App.css'
import CarRentalPage from './components/carrentalPage/CarRentalPage'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <div className="min-h-[80vh]">
        <CarRentalPage />
    </div>
    </>
  )
}

export default App
