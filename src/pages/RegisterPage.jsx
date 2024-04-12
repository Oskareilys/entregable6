import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/styles/FormRegister.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchemaRegister } from '../components/ValidationsTheForm/userSchema'

const RegisterPage = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(userSchemaRegister)
  })

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
          {
                errors.firstName?.message && <p className='message__error'>{errors.firstName?.message}</p>
          }
        </label>
        <label className='form__label' htmlFor="">
          <span className="form__item">Last Name</span>
          <input {...register('lastName')} type="text" className="form__value " />
          {
                errors.lastName?.message && <p className='message__error'>{errors.lastName?.message}</p>
          }
        </label>
        <label className='form__label' htmlFor="">
          <span className="form__item">Email</span>
          <input {...register('email')} type="email" className="form__value " />
          {
                errors.email?.message && <p className='message__error'>{errors.email?.message}</p>
          }
        </label>
        <label className='form__label' htmlFor="">
          <span className="form__item">Password</span>
          <input {...register('password')} type="password" className="form__value " />
            {
                errors.password?.message && <p className='message__error'>{errors.password?.message}</p>
              }
        </label>
        <label  className='form__label' htmlFor="">
          <span className="form__item">Gender</span>
          <select {...register('gender')} className="form__option">
            <option className="form__option__value" value="unkwown">Unkwown</option>
            <option className="form__option__value" value="male">Male</option>
            <option className="form__option__value"  value="female">Female</option>
            <option className="form__option__value" value="other">I prefer don't say it</option>
          </select>
          {
                errors.gender?.message && <p className='message__error'>{errors.gender?.message}</p>
              }
        </label>
        <button className="form__btn ">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;
