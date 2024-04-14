import React from "react"
import { FaCircleInfo } from "react-icons/fa6"

export default function Main(props) {
    const { showSideBar, toggleSideBar, data } = props
    return (
        <div className=" relative ">
            <div>
                {data && data.media_type === "image" ? (
                    <img
                        src={data.hdurl}
                        className="h-screen w-screen object-cover"
                    />
                ) : data && data.media_type === "video" ? (
                    <iframe
                        className="h-screen w-screen object-cover"
                        src={data.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                ) : (
                    <img
                        alt={data.title}
                        className="h-screen w-screen object-cover"
                    />
                )}
            </div>

            <div className=" absolute bottom-0 left-0  z-20 flex w-full    px-10 py-16 text-slate-100 justify-between xl:px-24 xl:py-20">
                {/* class bgGradient */}
                <div className=" absolute inset-0 z-10  bg-gradient-to-b from-transparent to-slate-950 opacity-90 "></div>
                <div className=" z-20 ">
                    <h2 className="text-1xl font-thin tracking-widest  ">
                        ASTRONOMY PICTURE OF THE DAY - APOD PROJECT
                    </h2>
                    <h1 className=" py-4 text-4xl md:text-5xl xl:text-6xl font-semibold">
                        {data?.title}
                    </h1>
                </div>
                <button
                    onClick={toggleSideBar}
                    className=" z-20  rounded-full m-auto mr-4 text-5xl md:mr-8 xl:mr-16 md:text-6xl xl:text-7xl text-slate-50 duration-200 hover:text-purple-300 ">
                    <FaCircleInfo />
                </button>
            </div>
        </div>
    )
}
