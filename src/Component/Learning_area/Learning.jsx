import React, { useState, useEffect } from "react";
import axios from 'axios'

function Learning() {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:8000/v1/topic/getTopic')
            setTopics(result.data)
        }
        getData()
    }, [])
    return (
        <>
            <div className=" flex flex-row bg-lime-500 rounded-lg justify-evenly items-center text-slate-100 text-xl font-mono my-4">
                <div>
                    <span>Hello! <br></br> Here Some Suggest Topic</span>
                </div>
                <div className=" m-2 rounded-lg flex w-20 h-20">
                    <img src="./image/start.gif"></img>
                </div>
            </div>

            <div className="h-3/4 flex flex-col items-center">
                {topics.map((topic) => {
                    return (
                        <>
                            <div className="w-3/4 p-4 m-2 bg-slate-200 cursor-pointer rounded-md">
                                {topic.name}
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}
export default Learning