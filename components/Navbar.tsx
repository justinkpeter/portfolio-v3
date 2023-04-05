import React, {ReactNode, useEffect} from "react";
import {Bars2Icon} from "@heroicons/react/24/solid";
import {scrollIntoView} from "@/utils/functions";

// cool svg spinner
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

// Navbar to display on devices larger than 640px
const Navbar2 = () => {
    return (
        <>
            <nav className={'sticky top-0 h-fit w-full pt-6 sm:flex justify-between uppercase text-lg z-[100] scroll-smooth '}>
                <span className={'flex items-center cursor-pointer'} onClick={() => {scrollIntoView('hero')}}>
                    <Spinner/>
                    <span> JP23 </span>
                </span>
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


// declaring interface to allow children to be passed in
interface MyProps {
    children?: ReactNode;
}

export const Navbar = ({children}:MyProps) => {

    const [menu, setMenu] = React.useState<HTMLInputElement | null>(null);

    useEffect(() =>{
        setMenu(document.getElementById('my-drawer') as HTMLInputElement);
    }, [])

    function toggleMenu() {
        if(menu){
            menu.checked = !menu.checked;
        }
    }

    return(
        <>
            <div className={'drawer w-screen p-0'}>
                <input id={'my-drawer'} type={'checkbox'} className={'drawer-toggle'} />
                <div className={'drawer-content'}>
                    {/* page content */}
                    <div>
                        <label htmlFor="my-drawer-4" className="sm:hidden absolute z-[300] top-4 w-fit h-fit right-0 bg-transparent drawer-button btn btn-primary z-[200] border-0 hover:bg-inherit">
                            <Bars2Icon className={'relative h-8 w-8 text-black dark:text-stone-600'}/>
                        </label>
                        <div className={'drawer w-full h-full drawer-end relative'}>
                            <input id="my-drawer-4" type="checkbox" className={'drawer-toggle'} />
                            <div className={'drawer-content w-full h-screen flex flex-col justify-center  items-center overflow-x-hidden overflow-y-scroll px-[5vw]  relative dark:text-zinc-800 dark:bg-stone-400'}>
                                <div className={'relative max-w-[2048px] flex flex-col items-center  w-full h-full'}>
                                    <Navbar2/>
                                    {children}
                                </div>
                                {/* app layout */}
                                {/*<Navbar2/>*/}
                                {/*{children}*/}
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" className="drawer-overlay"/>
                                {/* mobile drawer menu*/}
                                <div className="menu p-5 pb-36  h-screen w-full bg-base-100 dark:bg-zinc-900 text-base-content dark:text-stone-400 relative justify-end items-end flex flex-col space-y-5 font-cabinet text-5xl font-medium uppercase ">
                                    {['projects', 'about', 'contact'].map((item, index) => {
                                        return(
                                            <span key={index}
                                                  onClick={() => {
                                                      scrollIntoView(item)
                                                      toggleMenu()
                                                  }}
                                                  className={'cursor-pointer pb-1 hover:before:scale-x-100  hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 '}>
                                                {item}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}