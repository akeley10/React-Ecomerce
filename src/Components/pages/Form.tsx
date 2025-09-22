import { useState } from "react";
import Navbar from "../Navbar";
import Sucess from "../Succes";
import { useUser } from '../../context/User.context';

const Form = () => {
  const { setEmail } = useUser();
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageRegister, setShowMessageRegister] = useState(false);
  const [showLogin ,setShowLogin] = useState(true);
  const [password, setPassword] = useState('');
  const [emailForm, setEmailForm] = useState('');

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    fetch("https://react-ecomerce.akeley10lol.workers.dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailForm, password }),
    })
    .then(async res => {
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error al iniciar sesión");
        return;
      }  
      console.log("Respuesta JSON:", data);
      setEmail(data.email);
      localStorage.setItem('userEmail', data.email);
       setShowMessage(true);
      setTimeout(function(){
        setShowMessage(false);
        window.location.href="/";
    }, 2000); 
    })
    
    .catch(err => {
      console.error("Error en fetch:", err);
    });
  };

  const registerData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    fetch("https://react-ecomerce.akeley10lol.workers.dev/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailForm, password }),
    })
    .then(res => {
      console.log("Código de estado:", res.status);
      return res.json();
    })
    .then(data => {
     setShowMessageRegister(true);
      console.log("Respuesta JSON:", data);
      setTimeout(function(){
      setShowMessageRegister(false);
      window.location.href="/";
    }, 2000); 
    })
    .catch(err => {
      console.error("Error en fetch:", err);
    });

  }

  return (
  
    <>
    <Navbar></Navbar>
    <div  className={showMessage === true ? "flex flex-col items-center justify-center min-h-screen dark:bg-[#272935] bg-gray-50 m-auto" : "hidden"}>
 
      <Sucess></Sucess>
      <p className="text-green-500">Login Succesfull</p>
    </div>
    <div id="login" className={showLogin  === false  || showMessage === true ? "hidden" : "dark:bg-[#272935] w-full  flex justify-center absolute top-25 items-center"}>
      <form onSubmit={sendData} className="card w-100 rounded-xl border border-gray-50 content-center p-10 mb-30 bg-base-100 shadow-lg flex flex-col gap-y-4 mt-30">
        <h2 className="dark:text-white text-center text-3xl font-bold mb-5 mt-5">Login</h2>
        <div className="flex flex-col text-center">
          <label className=" dark:text-white text-2xs text-left">Email</label>
          <input
            className="border border-[#394e6a33] dark:text-white dark:border-white p-2 mb-5 rounded-xl"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
            name="email"
            type="email" required
          />
          <label className="dark:text-white text-2xs text-left">Password</label>
          <input
            className="border border-[#394e6a33] dark:text-white dark:border-white p-2 mb-5 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password" required
          />
          <button className="bg-[#057aff] hover:bg-[#055dff]  p-2 text-white rounded-6xs cursor-pointer" type="submit">Login</button>
        </div>
        <a onClick={ ()=> setShowLogin(false)}  className='text-[#057aff] cursor-pointer m-auto'>¿No tienes cuenta? Registrate</a>
      </form>
    </div>

    <div  className={showMessageRegister === true ? "flex flex-col items-center justify-center min-h-screen dark:bg-[#272935] bg-gray-50  m-auto" : "hidden"}>
      <Sucess></Sucess>
      <p className="text-green-500">Register Succesfull</p>
    </div>
    <div id="register" className={showLogin  === true || showMessageRegister === true  ? "hidden" : "dark:bg-[#272935] w-full  flex justify-center absolute top-25 items-center"}>
      <form onSubmit={registerData} className="card w-100 rounded-xl border border-gray-50  p-10 mb-30  content-center  bg-base-100 shadow-lg flex flex-col gap-y-4 mt-30">
        <h2 className="dark:text-white text-center text-3xl font-bold mb-5 mt-5">Register</h2>
        <div className="flex flex-col text-center">
          <label className="dark:text-white text-2xs text-left">Email</label>
          <input
            className="border dark:border-white dark:text-white border-[#394e6a33] p-2 mb-5 rounded-xl"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
            name="email"
            type="email" required
          />
          <label className="dark:text-white text-2xs text-left">Password</label>
          <input
            className="border dark:border-white dark:text-white border-[#394e6a33] p-2 mb-5 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="text" required
          />
          <button className="bg-[#057aff] hover:bg-[#055dff] p-2 text-white rounded-6xs cursor-pointer" type="submit">Register</button>
        </div>
        <a  onClick={ ()=> setShowLogin(true)} className="text-[#057aff] cursor-pointer m-auto">¿Tienes una cuenta? Logeate</a>
      </form>
    </div>
    </>
  );
};

export default Form;
