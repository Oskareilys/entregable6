import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import UserLogged from '../components/LoginPage/UserLogged'

const LoginPage = () => {

  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))

  const { register, handleSubmit, reset } = useForm()

  const { loginUser } = useAuth()

  const submit = data => {

      loginUser(data)
      reset ({
        email: '',
        password: '',
      })

  }

  if(localStorage.getItem('token')) {
    return <UserLogged
            setUser={setuser}
            user={user}
            />
  }
  return (
    <div className="form__total-container ">
      <div className=".form__container register_form">
      <form className="form__total"  onSubmit={handleSubmit(submit)}>
        <div className="form__cont-name">
            <h1 className="form__name">Login</h1>
        </div>
          <label className='form__label'>
            <span className="form__item">Email</span>
            <input {...register('email')} type="email" className="form__value "/>
          </label>
          <label className='form__label'>
            <span className="form__item">Password</span>
            <input {...register('password')} type="password" className="form__value "/>
          </label>
          <button className="form__btn ">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default LoginPage