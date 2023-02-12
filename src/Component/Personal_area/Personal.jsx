import React from "react";
function Personal() {
    return (
        <>
            <div className="flex flex-col p-4 px-10">
                <div className="py-2 px-4 my-2  uppercase font-sans  cursor-pointer border  border-blue-300  rounded-md">
                    <span>My vocabulary</span>
                </div>
                <div className="py-2 px-4 my-2  uppercase font-sans cursor-pointer  border border-blue-300  rounded-md">
                    <span>
                        Dictionary
                    </span>
                </div>
                <div className="py-2 px-4 my-2  uppercase font-sans cursor-pointer  border border-blue-300  rounded-md">
                    <span>
                        Add Topic
                    </span>
                </div>
            </div>
        </>
    )
}
export default Personal