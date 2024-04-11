/** @format */
import '../styles/LoginImg.css'


const UserLogged = ({ setUser, user }) => {


    const handleLogout = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

  return (
    <article className="login">
        <header className="login__header">
            <img  className="login__perfil__img"
            src={
                user.gender === 'female'
                ? '/user-female-icon.jpg'
                : '/user-male-icon.png'
            }   
            alt="" />
        </header>
            <h2 className="login__name">
                {user.firstName} {user.lastName}
            </h2>
            <button className="login__btn" onClick={ handleLogout }>Logout</button>
    </article>
  )
}

export default UserLogged