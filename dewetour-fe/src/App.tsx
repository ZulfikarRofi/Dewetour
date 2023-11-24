import { Route, Routes } from 'react-router-dom'
import BottomNavbar from './components/BottomNavbar'
import LandingPage from './pages/LandingPage'
import './assets/style.css'
import DetailTour from './pages/DetailTour'
import PaymentPending from './pages/PaymentPending'
import PaymentPage from './pages/PaymentPage'
import Profile from './pages/Profile'
import ListTransaction from './pages/Admin/ListTransaction'
import AddTrip from './pages/Admin/AddTrip'
import IncomeTrip from './pages/Admin/IncomeTrip'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/trip/:id' element={<DetailTour />} />
        <Route path='/pending' element={<PaymentPending />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/listTransaction' element={<ListTransaction />} />
        <Route path='/incomeTrip' element={<IncomeTrip />} />
        <Route path='/addTrip' element={<AddTrip />} />
      </Routes>
    <BottomNavbar />
    </>
  )
}

export default App
