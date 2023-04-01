import React from "react";
import {Divider} from "@/components/Divider";

export const Contact = () => {

    const dividerLabels: string[] = ['4.0', `Let's work together`, `Say hello (don't be shy)`];

    return (
        <>
            <>
                <section id={'about-me'} className={'relative h-fit pt-20 sm:pt-[45vh]'}>
                    <Divider showLabels={true} labels={dividerLabels}/>
                    <div className={'text-6xl sm:text-5xl lg:hidden lg:text-8xl  relative font-semibold font-panchang uppercase my-[14vw] lg:pl-[16rem]  break-words underline'}>
                        <a> hello@</a><br/>
                        <a> justin</a><br/>
                        <a> peter</a><br/>
                        <a> .dev</a>
                    </div>
                    <ul className={'hidden sm:flex text-5xl sm:text-5xl lg:text-8xl lg:flex lg:flex-col relative font-bold font-panchang uppercase my-24  sm:break-words lg:break-normal underline'}>
                        <li><a> hello@justin</a></li>
                        <li><a> peter.dev </a></li><br/>
                    </ul>
                </section>
            </>
        </>
    );
}