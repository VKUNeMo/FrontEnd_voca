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

            <div className="h-1/4 bg-lime-500  m-2 rounded-lg text-slate-100 flex justify-center items-center">
                <span>Topic in here</span>
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