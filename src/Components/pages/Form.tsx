import { useState } from "react";
import { useUser } from '../../context/User.context';

const Form = () => {
  const { setEmail } = useUser();
  const [showLogin ,setShowLogin] = useState(true);
  const [password, setPassword] = useState('');
  const [emailForm, setEmailForm] = useState('');

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailForm, password }),
    })
    .then(res => {
      console.log("Código de estado:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Respuesta JSON:", data);
      setEmail(data.email);
      localStorage.setItem('userEmail', data.email);
      alert("Login Correctamente")
      setTimeout(function(){
        window.location.href = "/";
    }, 2000); 
    })
    .catch(err => {
      console.error("Error en fetch:", err);
    });
  };

  return (
    <>
    <div id="login" className={showLogin  === false  ? " hidden w-full justify-center absolute top-5 items-center" : "w-full flex justify-center absolute top-5 items-center"}>
      <form onSubmit={sendData} className="card w-100 content-center p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 mt-50">
        <h2 className="text-center text-3xl font-bold mb-5 mt-5">Login</h2>
        <div className="flex flex-col text-center">
          <label className="text-2xs text-left">Email</label>
          <input
            className="border border-[#394e6a33] p-2 mb-5 rounded-xl"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
            name="email"
            type="email"
          />
          <label className="text-2xs text-left">Password</label>
          <input
            className="border border-[#394e6a33] p-2 mb-5 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="text"
          />
          <button className="bg-[#057aff] p-2 text-white rounded-6xs cursor-pointer" type="submit">Login</button>
        </div>
        <a onClick={ ()=> setShowLogin(false)}  className='text-[#057aff] cursor-pointer m-auto'>¿No tienes cuenta? Registrate</a>
      </form>
    </div>

    <div id="register" className={showLogin  === true  ? "hidden w-full flex justify-center absolute top-5  items-center" : "w-full flex justify-center absolute top-5  items-center"}>
      <form onSubmit={sendData} className="card w-100 content-center p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 mt-50">
        <h2 className="text-center text-3xl font-bold mb-5 mt-5">Register</h2>
        <div className="flex flex-col text-center">
          <label className="text-2xs text-left">Email</label>
          <input
            className="border border-[#394e6a33] p-2 mb-5 rounded-xl"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
            name="email"
            type="email"
          />
          <label className="text-2xs text-left">Password</label>
          <input
            className="border border-[#394e6a33] p-2 mb-5 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="text"
          />
          <button className="bg-[#057aff] p-2 text-white rounded-6xs cursor-pointer" type="submit">Register</button>
        </div>
        <a  onClick={ ()=> setShowLogin(true)} className="text-[#057aff] cursor-pointer m-auto">¿Tienes una cuenta? Logeate</a>
      </form>
    </div>
    </>
  );
};

export default Form;
