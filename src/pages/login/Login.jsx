import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

function Login() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault()
    const body={
      email,
      password
    }
     await axios.post(`https://api.ourmicrolife.com/api/admin/eco/login`,
      body
     )
     .then((response)=>{
         console.log(response.data.token)
         localStorage.setItem("ecomToken",response.data.token)
         navigate('/admin/dashboard',{replace: true })
     })
     .catch((error)=>{
        console.log(error)
     })
    
   
  };
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-slate-200">
      <div className="w-[30%]  h-auto flex flex-col items-center p-3 gap-4 border-2 rounded-md bg-white">
        <h1 className="text-3xl font-semibold ">Admin Login</h1>
        <form className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="text-2xl font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-xl px-3 py-2 border-2 rounded-md outline-none  "
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="text-2xl font-semibold">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-xl px-3 py-2 border-2 rounded-md outline-none "
              value={password}
              onChange={(e)=>{
                 setPassword(e.target.value)
              }}
            />
          </div>
          <button
            className="bg-blue-500 text-white text-2xl rounded-md py-1"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
