import React from "react";
import Learning from "../Learning_area/Learning";
import Personal from "../Personal_area/Personal";
function Home() {

    return (
        <>
            <div className="grid grid-cols-4 w-full justify-evenly ">
                <div id="personal-area">
                    <div>
                        <Personal />
                    </div>
                </div>
                <div id="learning-area " className="col-span-2">
                    <Learning></Learning>
                </div>
                <div id="schedule">
                    schedule
                </div>
            </div>

        </>
    )
}
export default Home