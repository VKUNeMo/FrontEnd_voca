import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    function navigateToLogin() {
        navigate("/login")
    }
    return (
        <>
            <div className=" w-screen h-screen flex items-center justify-center ">
                <div id="opacity"></div>
                <div className="flex flex-row">
                    <div className="flex flex-col p-4 bg-slate-900 rounded-l-lg text-slate-100 relative ">
                        <div className="flex justify-center">
                            <img src="./image/grilLearn.png" alt="Education image"></img>
                        </div>
                    </div>
                    <form id="login-form" className="flex flex-col p-4 bg-slate-900 rounded-r-lg text-slate-100 relative">
                        <div>
                            <span className="text-3xl font-serif">Create your free accout</span>
                        </div>
                        <div className="p-2 my-2 text-area">
                            <span>Username</span>  <br></br>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-700 rounded-sm focus:outline-none py-1 mt-1"></input>
                        </div>
                        <div className="p-2 my-2 text-area">
                            <span>Username</span>  <br></br>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-700 rounded-sm focus:outline-none py-1 mt-1"></input>
                        </div>
                        <div className="p-2 my-2 text-area">
                            <span>Username</span>  <br></br>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-700 rounded-sm focus:outline-none py-1 mt-1"></input>
                        </div>
                        <div className="p-2 my-2 text-area">
                            <span>Password</span>  <br></br>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-700 rounded-sm focus:outline-none py-1 mt-1"></input>
                        </div>

                        <div className="flex justify-center">
                            <button className="py-2 px-14 bg-purple-600 bg-opacity-80 rounded-sm">Sign In</button>
                        </div>
                        <div className="p-2 mt-2">
                            <span className="px-2">
                                You already have accout.
                            </span>
                            <span className="px-2 italic underline cursor-pointer" onClick={navigateToLogin}>
                                Login here
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Register