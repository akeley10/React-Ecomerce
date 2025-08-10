import { useState } from "react";
const Form = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const sendData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify( {
        "email": email,
        "password": password,
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  };

  return (
    <>
    <div className="w-full flex justify-center items-center">
      <form onSubmit={sendData} className="card w-100 content-center p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 mt-50">
        <h2 className="text-center text-3xl font-bold mb-5 mt-5">Login</h2>
        <div className="flex flex-col text-center">
        <label className="text-2xs text-left">Email</label>
        <input className="border border-[#394e6a33] p-2 mb-5 rounded-xl" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="email"></input>
        <label className="text-2xs text-left">Password</label>
        <input className="border border-[#394e6a33] p-2 mb-5 rounded-xl" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" type="text"></input>
        <button className="bg-[#057aff] p-2 text-white rounded-6xs cursor-pointer" type="submit">Login</button>  
        </div>
      </form>
      </div>
    </>
  )
}

export default Form
