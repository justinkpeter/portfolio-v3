import React from 'react';
import {Divider} from "./Divider";
import Image from 'next/image'

export const AboutMe = () => {

    const dividerLabels: string[] = ['3.0', 'about me', 'who i am'];

    return (
        <>
            <section id={'about-me'} className={'relative h-fit my-36'}>
                <Divider showLabels={true} labels={dividerLabels}/>
                <div className={'md:text-5xl lg:text-7xl relative font-bold font-panchang uppercase pt-16 lg:pt-28 pl-[10rem] lg:pl-[16rem] h-fit'}>
                    <div className={'flex flex-col relative space-y-3 w-full'}>
                        <h1> portraits, </h1>
                        <Image src={'/images/portrait.jpg'} width={1280} height={1280} alt={`hey, it's me`} className={'relative w-3/4 h-[40vh] object-cover object-center'}/>
                        <h1> coding, </h1>
                        <h1> music. </h1>
                    </div>
                    <div className={'relative w-full lg:w-3/4 h-fit text-xl flex sm:flex-col sm:space-y-6 lg:flex-row py-6 lg:py-0 lg:space-y-0 normal-case font-cabinet font-medium mt-10 '}>
                        <div className={'w-full lg:w-1/2 uppercase text-xl md:text-2xl lg:text-3xl flex flex-col '}>
                            <h5>The Holy Trinity to my life</h5>
                        </div>
                        <div className={'w-3/4 lg:w-1/2 flex sm:flex-col text-2xl relative'}>
                            <p className={'w-full'}>
                                For me, coding is more than just combining ones and zeros. It’s about fostering community and pushing the
                                boundaries of our imaginations.
                            </p>
                            <br/>
                            <p> I find ways to let my imagination roam capturing ways to express myself through a Canon lens.
                                I'm passionate about creative portraits -- framing moments in time to appreciate the harmony of life.
                            </p>
                            <br/>
                            <p>
                                When I'm not coding, you can find me taking photos for my girlfriend's Instagram my photography portfolio,
                                or watching anime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}