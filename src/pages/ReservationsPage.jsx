import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import '../components/styles/ReservationPage.css'
import ReserveCard from '../components/ReservationsPage/ReserveCard'
import FormReviews from '../components/ReservationsPage/FormReviews'
import { Link, useNavigate } from "react-router-dom"

const ReservationsPage = () => {
  const navigate = useNavigate()

  const [reviewOpen, setReviewOpen] = useState(true)

    const [bookings,getBookings,,deleteBooking] = useCrud()

    const [reserveSelected, setReserveSelected] = useState()

    useEffect(()=>{
      const url = 'https://hotels-app-7en4.onrender.com/bookings'
      getBookings(url)  

    },[])
  return (
    <div>
    <section className="reservationpage__container">
        <FormReviews
          reserveSelected={reserveSelected}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
        />
        <h2 className="reservationpage__title">Reservations</h2>
        <div className="reservationpage__cards">
          {
            bookings?.map(reserve => (
              <ReserveCard
                key={reserve.id}
                reserve={reserve}
                setReserveSelected={setReserveSelected}
                deleteBooking={deleteBooking}
                setReviewOpen={setReviewOpen}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default ReservationsPage