import React from "react";
import {Divider} from "./Divider";

export const Introduction = () => {

    const Header = () => {
        return (
            <>
                <span className={'text-xl sm:text-7xl uppercase font-medium pb-2'}>
                    <span> Bridging the gap </span><br/>
                    <span> Between creativity and </span><br/>
                    <span> meaningful user experiences </span><br/>
                </span>
            </>
        )
    }

    const dividerLabels: string[] = ['1.0', 'Software Engineer', 'Something'];

    return (
        <>
            <section id={'introduction'} className={'w-full font-cabinet pt-[30vh] pb-[5vh] relative'}>
                <Header/>
                <Divider showLabels={true} labels={dividerLabels}/>
                <div className={' text-base sm:text-2xl lg:text-4xl sm:ml-64 mt-16 sm:mt-28 sm:pl-2 font-medium uppercase'}>
                    Standing at the intersection of imagination and technology, I create memorable web experiences. My approach is simple:
                    build innovative solutions that are both creative and functional.
                    <br/>
                    <br/>
                    When I'm not coding, you can find me taking photos for
                    <span className={'line-through italic text-black/20'}> my girlfriend's Instagram </span>
                    my photography portfolio, or watching anime.
                    <br/>
                    <br/>
                    <div className={'relative  normal-case w-full flex sm:flex-col md:flex-row gap-2 sm:gap-10 lg:space-x-44  pt-6 lg:pt-12'}>
                        <div className={'w-fit lg:w-86'}> A perfect blend of UI and product engineering. </div>
                        <div className={'relative w-full flex flex-col sm:space-y-12'}>
                            <p className={'w-full hidden sm:flex'}>
                                As a design-savvy software engineer,  I collaborate with design-focused teams to craft websites and applications that
                                leave lasting impressions. With experience working in product teams and engineering efforts, I know just how to make an online
                                presence stand out from the crowd.
                            </p>
                            <p className={'w-full'}>
                                Whether it's a website, an app, or something completely out of the box, I believe that every line of code counts towards building
                                something that people will love to use.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}