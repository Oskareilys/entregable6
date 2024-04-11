import { set, useForm } from "react-hook-form";

const PriceFIlter = ({setFromTo}) => {


const { handleSubmit, register, reset } = useForm()

const submit = data =>{
    const from = data.from
    const to = data.to
    

    setFromTo({
        from: from === '' ? 0 : +from,
        to: to === '' ? Infinity : +to
    })

}

  return (
    <section className="price__container">
      <h3 className="price__name" >Price</h3>
      <form  className="price__from" onSubmit ={handleSubmit(submit)}>
        <label className="price__label">
          <span className="price__span">From </span>
          <input {...register('from')} type="number" className="price__input"/>
        </label>
        <label className="price__label">
          <span className="price__span">To </span>
          <input {...register('to')} type="number"  className="price__input"/>
        </label>
        <button className="price__btn">Apply</button>
      </form>
    </section>
  );
};

export default PriceFIlter;