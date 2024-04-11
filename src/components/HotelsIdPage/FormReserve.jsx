import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReserve = ( { hotelId }) => {

  const { handleSubmit, register, reset } = useForm()

  const [,,createBooking] = useCrud()

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    data.hotelId = Number(hotelId)
    createBooking(url, data)

  }

  return (
    <div className="hotelid__container__reservation">
      <section  className="hotelid__reserve__container">
        <h3 className='hoteid__reserve__title'>Do you want to reserve this hotel?</h3>
        <form className= 'hotelid__reserve__form' onSubmit ={handleSubmit(submit)}>
          <div className="hotelid__container__fechas"> 
          <label className="hoteild__reserve__label" htmlFor="">
            <span className="hotelid__reserve__span ">Check-in</span>
            <input className="hotelid__input__value" {...register('checkIn')}type="date" />
          </label>
          
          <label className="hoteild__reserve__label" htmlFor="">
            <span className="hotelid__reserve__span ">Check-out</span>
            <input className="hotelid__input__value" {...register('checkOut')}type="date" />
          </label>
          </div>
          <div className="hotelid__container__btn-reserve">
          <button className="hotelid__reserve__btn" >Submit</button>
          </div>
          
        </form>
      </section>
    </div>
  );
};

export default FormReserve;
