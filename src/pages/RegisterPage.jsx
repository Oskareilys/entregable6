import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/styles/FormRegister.css'

const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()

  const { registerUser, loginUser } = useAuth()

  const submit = data => {

      registerUser(data)
      reset ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: 'unknown'
      })

  }

  return (
    <div className="form__total-container ">
      <div className=".form__container register_form">
      
      <form className="form__total" onSubmit={handleSubmit(submit)}>
        <div className="form__cont-name">
        <h1 className="form__name">Register</h1>
        </div>
      
        <label className='form__label' htmlFor="">
          <span className="form__item">First Name</span>
          <input {...register('firstName')} type="text" className="form__value " />
        </label>
        <label className='form__label' htmlFor="">
          <span className="form__item">Last Name</span>
          <input {...register('lastName')} type="text" className="form__value " />
        </label>
        <label className='form__label' htmlFor="">
          <span className="form__item">Email</span>
          <input {...register('email')} type="email" className="form__value " />
        </label>
        <label className='form__label' htmlFor="">
          <span className="form__item">Password</span>
          <input {...register('password')} type="password" className="form__value " />
        </label>
        <label  className='form__label' htmlFor="">
          <span className="form__item">Gender</span>
          <select {...register('gender')} className="form__option">
            <option className="form__option__value" value="unkwown">Unkwown</option>
            <option className="form__option__value" value="male">Male</option>
            <option className="form__option__value"  value="female">Female</option>
            <option className="form__option__value" value="other">I prefer don't say it</option>
          </select>
        </label>
        <button className="form__btn ">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;
