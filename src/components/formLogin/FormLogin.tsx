import './formLogin.scss';

const FormLogin = () => {
   return (
      <div className="container_form">
         <div className="line"></div>
         <form action="" className="form_login">
            <label htmlFor="password" className="container_user">
               user
               <input name="user" type="text" placeholder="User" />
            </label>
            <label htmlFor="password" className="container_password">
               password<input name="password" type="password" placeholder="Password" />
            </label>
            <button className="form_submit" type="submit">
               LOGIN
            </button>
         </form>
         <div className="line"></div>
      </div>
   );
};

export default FormLogin;
