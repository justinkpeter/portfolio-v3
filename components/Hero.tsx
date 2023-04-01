import Model from "@/components/Model";
import React from "react";

export const Hero = () => {

    type HeroInfoTypes = {
        title: string,
        subtitle: string
    }[];

    const heroInfo:HeroInfoTypes = [
        {
            title: 'Date',
            subtitle: '2023'
        },
        {
            title: 'Role',
            subtitle: 'front end dev & motion'
        },
        {
            title: 'Location',
            subtitle: 'dallas, tx'
        },
        {
            title: 'Contact',
            subtitle: 'linkedin'
        }
    ]



    return (
        <>
            <section className={'relative h-[calc(100vh-3rem)] w-full flex flex-col pt-[calc(5vh)] items-center my-16 z-0'}>
                <Model/>
                <div className={'flex flex-col space-y-6 lg:space-y-7 font-panchang'}>
                    <h1 className={'uppercase text-5xl lg:text-6xl 2xl:text-7xl font-bold'}> Justin Peter </h1>
                    <ul className={'flex justify-between space-x-12'}>
                        {heroInfo.map((info, index) => {
                            return (
                                <li key={index} className={'flex flex-col'}>
                                    <h4 className={'uppercase text-xs lg:text-lg font-medium'}> {info.title} </h4>
                                    <span className={'uppercase text-[10px] lg:text-sm font-cabinet'}> {info.subtitle} </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}