import React from "react";
import {Bars2Icon} from "@heroicons/react/24/solid";
import {scrollIntoView} from "@/utils/functions";

export const Navbar = () => {
    const Spinner = () => {
        return(
            <>
                <svg
                    className={'animate-spin w-4 h-4 mr-[0.5ch]'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 411 401">
                    <path d="M205.5 401l-34.89-138.06-129.69 58.8 86.2-113.35L.27 143.66l142.36-3.3L114.17.86 205.5 110.1 296.83.85l-28.47 139.52 142.36 3.29-126.83 64.73 86.19 113.36-129.7-58.8L205.5 401z"></path>
                </svg>
            </>
        )
    }

    return (
        <>
            <nav className={'sticky top-0 h-full w-full pt-6 flex justify-between uppercase text-lg z-[100] scroll-smooth '}>
                <span className={'flex items-center cursor-pointer'} onClick={() => {scrollIntoView('hero')}}>
                    <Spinner/>
                    <span> JP23 </span>
                </span>
                <div className={'sm:hidden'}> <Bars2Icon className={'h-8 w-8'}/> </div>
                <div className={'hidden sm:flex gap-2 items-center font-medium text-xs sm:text-sm md-text-base xl:text-lg'}>
                    { ['about', 'projects', 'contact'].map((item, index) => {
                        return(
                            <span key={index}
                               onClick={() => {scrollIntoView(item)}}
                               className="cursor-pointer pb-1 hover:before:scale-x-100  hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 ">
                                {item}
                            </span>
                        )
                    })}
                </div>
            </nav>
        </>
    );
}