import {useState} from 'react'
import Header from "./Header";
import BackGround from "../utils/BackGround.jpg";
const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true)
  const toggleSIgnInForm=()=>{
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
      <div className="absolute">
        <img src={BackGround} alt="Back Ground" />
      </div>
      <Header />
      <form className=" absolute p-12 bg-black/80 my-26 mx-auto right-0 left-0 text-white rounded-lg  w-[400px]  flex-col justify-center items-center">
        <h1 className="font-bold text-3xl py-4 mx-13">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm &&
         <input
          type="text"
          placeholder="Enter Your Name"
          className="p-2 m-2 bg-gray-700 text-white rounded-lg outline-none   "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-700 text-white rounded-lg outline-none   "
        />
      
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 text-white rounded-lg outline-none"
        />
        <button className="p-2 mx-24 my-5 bg-red-700 rounded-lg">
        {isSignInForm? "Log in":"Sign Up"}
        </button>
        <p className="px-5 cursor-pointer" onClick={toggleSIgnInForm}>{isSignInForm? "New to Netflix? Sign up here":"Already registered? Sign in Now."}</p>

      
      </form>
    </div>
  );
};
export default Login;
