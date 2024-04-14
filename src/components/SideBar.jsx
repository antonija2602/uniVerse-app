import React from "react"
import { LuArrowRightFromLine } from "react-icons/lu"

export default function SideBar(props) {
    const { toggleSideBar, data } = props
    return (
        <div className=" absolute flex   h-full w-full   ">
            <div
                onClick={toggleSideBar}
                className="flex-1  bg-transparent"></div>
            <div className=" right-0 z-20  ml-auto flex   h-full w-5/6 max-w-7xl flex-col gap-12 overflow-y-auto   bg-slate-800 px-5 py-10 opacity-90 shadow-[0_0_20px_25px_rgba(0,0,0,0.1)] shadow-slate-800  ">
                {/* class sidebar */}

                {/* class bgOverlay */}

                {/* class sidebarContents */}
                <h2 className=" xl:text-6xl font-semibold md:text-5xl  text-slate-100 text-4xl ">
                    {data?.title}
                </h2>
                <p className="text-slate-100 text-1xl font-thin  xl:text-2xl">
                    {data?.date}
                </p>

                <div className=" flex flex-1 flex-col md:text-2xl xl:text-3xl gap-4 text-slate-100">
                    <p className=" ">{data?.explanation}</p>
                </div>
                <button
                    onClick={toggleSideBar}
                    className=" m-auto ml-0 mb-10  px-3 rounded bg-slate-300 text-5xl    md:text-6xl xl:text-7xl text-slate-800  duration-200 hover:bg-purple-300">
                    <LuArrowRightFromLine />
                </button>
            </div>
        </div>
    )
}

{
    /* <div className=" z-30 ml-auto flex h-full max-w-3xl flex-col  gap-8 overflow-y-auto bg-slate-800 px-5 py-10 opacity-80 shadow-[0_0_20px_25px_rgba(0,0,0,0.1)] shadow-slate-800  "> */
}
{
    /* class sidebarContents */
}
{
    /* <h2 className=" text-4xl text-slate-100 ">
  The breathtaking panorama of the universe stretches before us
</h2>
<div className="flex flex-1 flex-col gap-4 text-slate-100">
  <p>Description</p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
    tempore repudiandae inventore quisquam delectus numquam laborum
    nihil qui? Saepe obcaecati corporis deleniti at reiciendis libero
    magnam odit ab illo iusto.
  </p>
</div>
<button
  onClick={toggleSideBar}
  className=" mr-auto  text-4xl text-slate-400 duration-300 hover:text-slate-200"
>
  <LuArrowRightFromLine />
</button>
</div> */
}
