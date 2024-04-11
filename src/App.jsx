
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/hotels.slice'
import PrincipalHeader from './components/shared/PrincipalHeader'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoute from './pages/ProtectedRoute'
import FormContructions from './components/ReservationsPage/FormContructions'

function App() {

  const hotels= useSelector(states => states.hotels )

  const dispatch= useDispatch()

  useEffect(() =>{
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  },[])


  return (
    <div className='app'>
      <PrincipalHeader/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/hotels/:id' element={<HotelsIdPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route element = {<ProtectedRoute />}>
        <Route path='/reservations' element={<FormContructions />} />
      </Route>
    </Routes>

    </div>
  )
}

export default App
