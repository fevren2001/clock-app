import React, { useState, useEffect } from "react"

function Clock() {

    // const [time, setTime] = useState(new Date());

    const [date, setDate] = useState(new Date())
    const [formattedTime, setFormattedTime] = useState(
        {
            hour: 0,
            minute: 0,
            second: 0
        }
    )
    useEffect(
        () => {
            const interval = setInterval(() => {
                setDate(new Date()), 1000
            })
            return () => { clearInterval(interval) }
        }, []
    )

    useEffect(
        () => {
            setFormattedTime(
                {
                    hour: date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
                    minute: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
                    second: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
                })
        }, [date]

    )


    return (
        <>
            <p>{formattedTime.hour}:{formattedTime.minute}:{formattedTime.second}</p>
        </>)
}

export default Clock