import Model from "@/components/Model";
import React from "react";
import {userData} from "@/utils/userData";

export const Hero = () => {

    type HeroInfoTypes = {
        title: string,
        subtitle: string
        link?: string
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
            subtitle: 'linkedin',
            link: userData.socials.find((social) => social.name === 'linkedin')?.link
        }
    ]

    return (
        <>
            <section id={'hero'} className={'relative h-[calc(100vh-3rem)] w-full flex flex-col sm:pt-[calc(5vh)] items-center sm:my-16 z-0'}>
                <Model/>
                <div className={'sm:hidden flex items-center justify-center'}>
                    <div className={'rounded-full bg-yellow-500/40 w-72 h-72 absolute top-[8.5vh] -z-[40]'}/>
                </div>
                  <div className={'sm:hidden'}>
                    <p className={'uppercase text-sm font-medium my-2.5'}> creative developer </p>
                    <h1 className={'uppercase text-5xl font-panchang font-bold'}> Justin Peter </h1>
                    <p className={'font-medium text-lg py-5 w-full'}>
                      Combining technology with visual arts to bring a unique blend of creativity and technical expertise to every project.
                    </p>
                  </div>
                  <div className={'absolute top-[35.5rem] -right-[2rem] rounded-full w-32 h-32 flex items-center justify-center'}>
                    {/*<ArrowLongDownIcon className={'absolute w-9 h-9'}/>*/}
                    {/*<CircleText text={'Scroll Down ✶ Scroll Down ✶ '} width={32}/>*/}
                  </div>
                <div className={'hidden sm:flex flex-col space-y-6 lg:space-y-7 font-panchang items-center'}>
                    <h1 className={'uppercase text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold'}> Justin Peter </h1>
                    <ul className={'flex justify-between  w-full'}>
                        {heroInfo.map((info, index) => {
                            //if last item, add a class to remove the border
                            if(index === heroInfo.length - 1){
                                return (
                                    <li key={index} className={'flex flex-col'}>
                                        <h4 className={'uppercase text-xs lg:text-xl font-medium'}> {info.title} </h4>
                                        <a className={'uppercase text-[10px] sm:text-sm md:text-base lg:text-lg font-cabinet z-[50] hover:text-yellow-500 hover:underline'} href={'https://www.linkedin.com/in/justinkmpeter/'}  target={'_blank'} rel={'noopener noreferrer'}>
                                            {info.subtitle}
                                        </a>
                                    </li>
                                )
                            }
                            return (
                                <li key={index} className={'flex flex-col'}>
                                    <h4 className={'uppercase text-xs lg:text-xl font-medium'}> {info.title} </h4>
                                    <span className={'uppercase text-[10px] sm:text-sm md:text-base lg:text-lg font-cabinet'}> {info.subtitle} </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}