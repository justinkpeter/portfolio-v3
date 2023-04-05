import React from 'react';
import {Divider} from "./Divider";
import Image from 'next/image'

export const AboutMe = () => {

    const dividerLabels: string[] = ['3.0', 'about me', 'who i am'];

    return (
        <>
            <section id={'about'} className={'relative h-fit  my-24 pt-14 sm:my-36 md:my-12'}>
                <Divider showLabels={true} labels={dividerLabels}/>
                <div className={'text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl relative font-bold font-panchang uppercase pt-16 lg:pt-28 xl:pt-36 2xl:pt-56  h-fit'}>
                    <div className={'flex flex-col relative space-y-3 w-full'}>
                        <h1> portraits, </h1>
                        <Image src={'/images/portrait.jpg'} width={3500} height={3500} alt={`hey, it's me`} className={'relative w-full lg:w-3/4 2xl:w-full h-[40vh] object-cover object-center'}/>
                        <h1> coding, </h1>
                        <h1> music. </h1>
                    </div>
                    <div className={'relative w-full lg:w-3/4 xl:w-full h-fit text-xl flex flex-col sm:space-y-6 xl:flex-row py-0 space-y-6 sm:py-6 xl:py-0 lg:space-y-6 xl:space-y-0 normal-case font-cabinet font-medium mt-8 sm:mt-10 2xl:mt-24 '}>
                        <div className={'w-full font-bold xl:w-1/2 uppercase text-xl md:text-2xl lg:text-3xl 2xl:text-4xl '}>
                            <h5>The Holy Trinity to my life</h5>
                        </div>
                        <div className={'w-full sm:w-3/4 md:w-full flex flex-col text-lg sm:text-xl md:text-2xl 2xl:text-3xl relative lg:px-5 xl:px-14 '}>
                            <p className={'w-full'}>
                                For me, coding is more than just combining ones and zeros. It’s about fostering community and pushing the
                                boundaries. At the core of my being lies an innate gift that has helped me to explore the world in ways that are beyond the ordinary.
                                <br/>
                                <br/>
                                This gift is <span className={'italic text-inherit/40'}> my imagination. </span>
                            </p>
                            <br/>
                            <p> Through my Canon lens, I am able to capture moments that are truly magical. My passion for creative portraits has led me on a journey of self-discovery, where I am able to frame fleeting moments in time and
                                immortalize them forever. I find great joy in exploring the beauty and complexity of human emotions and relationships, and I am constantly in awe of the endless opportunities to appreciate the harmony of life
                                through the lens of my camera.
                            </p>
                            <br/>
                            <p>
                                When I'm not dream-chasing, I'm usually listening to music. One of my passions is finding underground artists on Spotify and <span className={'italic'}> putting my friends on</span>.
                                I'm also a huge fan of the R&B genre, and I'm always looking for bangers to add to my playlist.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}