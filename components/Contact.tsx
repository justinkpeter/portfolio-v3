import React from "react";
import {Divider} from "@/components/Divider";
import {userData} from "@/utils/userData";

export const Contact = () => {

    const dividerLabels: string[] = ['4.0', `Let's work together`, `Say hello (don't be shy)`];

    return (
        <>
            <>
                <section id={'contact'} className={'relative h-fit pt-20 sm:pt-[45vh]'}>
                    <Divider showLabels={true} labels={dividerLabels}/>
                    <div className={'text-6xl sm:text-6xl md:text-7xl xl:hidden lg:text-8xl  relative font-semibold font-panchang uppercase my-[14vw] xl:pl-[16rem]  break-words underline'}>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> hello@</a><br/>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> justin</a><br/>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> peter</a><br/>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> .dev</a>
                    </div>
                    <ul className={'hidden xl:flex text-5xl sm:text-5xl lg:text-8xl lg:flex-col relative font-bold font-panchang uppercase my-24  sm:break-words lg:break-normal underline'}>
                        <li><a href={`mailto: ${userData.email}?subject=Hi Justin!`}> hello@justin</a></li>
                        <li><a href={`mailto: ${userData.email}??subject=Hi Justin!`}> peter.dev </a></li><br/>
                    </ul>
                </section>
            </>
        </>
    );
}