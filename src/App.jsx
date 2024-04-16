import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useState, useEffect } from "react"
import { PiGearFill } from "react-icons/pi"
import axios from "axios"

export default function App() {
    const [showSideBar, setShowSideBar] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    useEffect(() => {
        async function fetchAPIData() {
            const url = "http://localhost:8000/apidata"

            const today = new Date().toDateString()
            const localKey = `NASA-${today}`

            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey))
                console.log("Data fetched from localStorage")
                setData(apiData) // Assuming setData is defined elsewhere
                return
            }
            localStorage.clear()

            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const apiData = await response.json()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                console.log("Data fetched from API")
                setData(apiData) // Assuming setData is defined elsewhere
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
