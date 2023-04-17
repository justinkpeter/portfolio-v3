import React from 'react';
import Link from 'next/link';
import {userData} from "@/utils/userData";

export const Footer = () => {
    return (
        <>
            <footer className={'relative w-full  py-6 pb-10 sm:py-8 text-xl uppercase font-medium font-medium text-xs sm:text-sm md-text-base xl:text-lg xl:pb-16 2xl:pb-24 '}>
                <div className={'flex flex-col space-y-6 lg:flex-row justify-between lg:items-end'}>
                    <div>
                        <span> Justin Peter </span><br/>
                        <span> Creative developer </span>
                    </div>
                    <div>
                        {userData.socials.map((item, index) => {
                            return(
                                <>
                                    <Link
                                        key={index}
                                        href={item.link}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                        className={'cursor-pointer pb-1 hover:before:scale-x-100  hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0'}>
                                        {item.name}
                                    </Link>
                                    <span>  { index === userData.socials.length - 1 ? '' : ', '} </span>
                                </>

                            )
                        })}

                    </div>
                    <div className={'lg:text-right'}>
                        <span> development justin peter </span><br/>
                        <span> design inspired by gil huybrecht</span>
                    </div>
                </div>

            </footer>
        </>
    );
}