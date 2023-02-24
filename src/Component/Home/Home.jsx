import React from "react";
import Learning from "../Learning_area/Learning";
import Personal from "../Personal_area/Personal";
function Home() {

    return (
        <>
            <div className="grid grid-cols-5 w-full justify-evenly ">
                <div id="personal-area" className="">
                    <div>
                        <Personal/>
                    </div>
                </div>
                <div id="learning-area " className="col-span-2 mx-2">
                    <Learning></Learning>
                </div>
                <div id="schedule" className="col-span-2 mx-2">
                    schedule
                </div>
            </div>

        </>
    )
}
export default Home