import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../validation";
function Login({ handleLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    function navigateToRegister() {
        navigate("/register")
    }
    function handleCheckLogin(e) {
        e.preventDefault()
        handleLogin(true)
        navigate("/home")
    }

    function checkValidUsername() {
        return validation.checkEmpty(username)
    }

    function checkValidPassword() {
        return validation.checkEmpty(password) && validation.checkLength(password, 8)
    }
    return (
        <>
            <div className=" w-screen h-screen flex items-center justify-center ">
                <div id="opacity"></div>
                <form id="login-form" className="flex flex-col p-4 bg-slate-900 rounded-lg text-slate-100 relative">
                    <div className="flex justify-center">
                        <img src="./image/grilLearn.png" alt="Education image"></img>
                    </div>
                    <div className="p-2 my-1 text-area">
                        <span>Username</span>  <br></br>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-700 rounded-sm focus:outline-none py-1 mt-1"></input> <br></br>
                        <span></span>
                    </div>
                    <div className="p-2 my-1 text-area">
                        <span>Password</span>  <br></br>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-700 rounded-sm focus:outline-none py-1 mt-1"></input> <br></br>
                        <span></span>
                    </div>
                    <div className="p-2 my-1 flex flex-row">
                        <div>
                            <input type="checkbox"></input>
                            <span className="px-2">Remember me</span>
                        </div>
                        <div className="italic underline cursor-pointer">
                            <span className="px-2">Forgot the account</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="py-2 px-14 bg-purple-600 bg-opacity-80 rounded-sm" onClick={e => handleCheckLogin(e)}>Login</button>
                    </div>
                    <div className="p-2 mt-2">
                        <span className="px-2">
                            You don't have accout.
                        </span>
                        <span className="px-2 italic underline cursor-pointer" onClick={navigateToRegister}>
                            Sign in here
                        </span>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Login