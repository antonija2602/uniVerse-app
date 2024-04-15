import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useState, useEffect } from "react"
import { PiGearFill } from "react-icons/pi"

export default function App() {
    const [showSideBar, setShowSideBar] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    useEffect(() => {
        async function fetchAPIData() {
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

            const url =
                "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`

            const today = new Date().toDateString()
            const localKey = `NASA-${today}`

            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey))
                // console.log(apiData)
                setData(apiData)
                return
            }
            localStorage.clear()

            try {
                const response = await fetch(url)
                // console.log(response)

                const apiData = await response.json()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                setData(apiData)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAPIData()
        return () => {}
    }, [])

    return (
        <div className=" flex">
            {data ? (
                <Main
                    data={data}
                    toggleSideBar={toggleSideBar}
                />
            ) : (
                <div className="flex flex-1 items-center justify-center  h-screen">
                    <PiGearFill className="opacity-20 size-28 animate-spin " />
                </div>
            )}

            {showSideBar && (
                <SideBar
                    data={data}
                    toggleSideBar={toggleSideBar}
                />
            )}
        </div>
    )
}
