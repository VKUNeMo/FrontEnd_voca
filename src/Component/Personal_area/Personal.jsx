import React from "react";
import { Link } from "react-router-dom";

function Personal() {
    return (
        <>
            <div className="flex flex-col p-4 px-10 text-teal-600 font-semibold">
                <Link to="/personal" >
                    <div className="py-3  bg-blue-50 px-6 my-2  uppercase font-sans  cursor-pointer border-2  border-blue-300  rounded-md">
                        <span>My vocabulary</span>
                    </div>
                </Link>
                <Link to="/dictionary" >
                    <div className="py-3  bg-blue-50 px-6 my-2  uppercase font-sans cursor-pointer  border-2 border-blue-300  rounded-md">
                        <span>Dictionary</span>
                    </div>
                </Link>
                <Link to="/more" >
                    <div className="py-3  bg-blue-50 px-6 my-2  uppercase font-sans cursor-pointer  border-2 border-blue-300  rounded-md">
                        <span>More</span>
                    </div>
                </Link>
            </div>
            <div>
                <img src="./image/tenlua.png" ></img>
            </div>
        </>
    )
}
export default Personal