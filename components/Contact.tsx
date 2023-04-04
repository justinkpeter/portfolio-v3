import React from "react";
import {Divider} from "@/components/Divider";
import {userData} from "@/utils/userData";

export const Contact = () => {

    const dividerLabels: string[] = ['4.0', `Let's work 2Gether`, `Say hello (don't be shy)`];

    return (
        <>
            <>
                <section id={'contact'} className={'relative h-fit pt-20 sm:pt-[45vh]'}>
                    <Divider showLabels={true} labels={dividerLabels}/>
                    <div
                        data-cursor-text={'EMAIL ME *'}
                        data-cursor-text-repeat="3"
                        className={'cursor-hover-item text-6xl sm:text-6xl md:text-7xl xl:hidden lg:text-8xl  relative font-semibold font-panchang uppercase my-[14vw] xl:pl-[16rem]  break-words underline'}>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> hello@</a><br/>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> justin</a><br/>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> peter</a><br/>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> .dev</a>
                    </div>
                    <div
                        data-cursor-text={'EMAIL ME *'}
                        data-cursor-text-repeat="4"
                        className={'cursor-hover-item  hidden xl:flex text-5xl sm:text-5xl lg:text-8xl lg:flex-col relative font-bold font-panchang uppercase my-24  sm:break-words lg:break-normal underline'}>
                        <a href={`mailto: ${userData.email}?subject=Hi Justin!`}> hello@justin</a>
                        <a href={`mailto: ${userData.email}??subject=Hi Justin!`}> peter.dev </a><br/>
                    </div>
                </section>
            </>
        </>
    );
}