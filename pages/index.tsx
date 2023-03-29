import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Model from '../components/Model';
import { ArcText } from '@/components/ArcText';

export default function Home() {

    return (
    <>
      <Head>
        <title>Justin Peter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

          {/* ERRORS START HERE*/}
        <div className={'mt-[30px] mb-2 px-3.5 flex flex-col items-center justify-center  font-cabinet overflow-hidden sm:hidden'}>
            {/* card */}
            <div className={'w-[360px] h-[360px] rounded-[20px] bg-black/40 relative p-4 flex flex-col text-white bg-gradient-to-b from-rose-400/40 to-orange-300/80'}>
                {/* image */}
                <Image src={'/images/avatar.jpg'} alt={'My Image'} className={'w-[125px] h-[125px] rounded-full object-cover object-top'} width={125} height={125}/>
                {/*  name  */}
                <h1 className={'text-4xl font-cabinet font-bold uppercase mt-10'}> Justin Peter </h1>
                {/* work with me  */}
                <div className={'rounded-full border-[1px] border-white h-9 text-xl font-regular flex justify-between px-3.5  items-center w-[300px] font-normal mt-4 mb-3.5 group hover:bg-white hover:text-black/40 hover:cursor-pointer transition ease-in'}>
                    <span> Work with me </span>
                    <div className={'rounded-full bg-zinc-700/40 w-5 h-5 flex items-center justify-center relative '}>
                        <ArrowRightIcon className={'w-4 h-4 text-white'}/>
                    </div>
                </div>
                {/* description   */}
                <div className={'flex flex-col text-sm font-medium  '}>
                    <p> Software Engineer </p>
                    <div className={'flex'}>
                        <MapPinIcon className={'w-4 h-4 text-white'}/>
                        <p> Dallas, TX  </p>
                    </div>
                </div>
            </div>
            {/* badges  */}
            <div className={'w-[360px]  my-7 flex-wrap space-x-1 space-y-1 text-xl uppercase font-cabinet'}>
                {
                    [
                        'software engineer',
                        'linkedin',
                        'github'
                    ].map((item) => {
                        return (
                            <span key={item} className={'border border-black rounded-full w-fit px-2.5 hover:bg-black/80 hover:border-black/80 hover:text-white transition hover:cursor-pointer'}> {item} </span>
                        )
                    })
                }
            </div>
            {/* intro */}
            <p className={'text-xl w-[360px] '}>
                Combining technology with visual arts to bring a unique blend of creativity and technical expertise to every project.
            </p>
            {/* projects */}
            <div>
                <h2 className={'uppercase font-extrabold text-2xl my-11'}> projects </h2>
                {/*  card   */}
                <div className={'w-[360px] h-[360px] border border-black rounded-[20px] bg-green-800/30 relative p-4 flex flex-col relative my-11 hover:cursor-pointer group '}>
                    <div className={'overflow-hidden rounded-xl mt-2 '}>
                        <img src={'/images/blendify.jpg'} alt="My Image" className={'w-full h-[150px] object-cover object-center group-hover:scale-125 transition ease-in-out duration-300'}/>
                    </div>
                    <div className={'flex justify-between items-center my-2.5 '}>
                        <h3 className={'font-extrabold text-xl'}> Blendify </h3>
                        <div className={'flex flex-col text-right'}>
                            <span className={'text-sm font-regular text-xs'}> React </span>
                            <span className={'text-sm font-regular text-xs'}> Spotify API </span>
                            <span className={'text-sm font-regular text-xs'}> Framer Motion </span>
                        </div>
                    </div>
                    <hr className={'h-1 w-full border-black'}/>
                    <p className={'my-4'}> My obsession with Spotify led to the inception of this app. Like Spotify Wrapped, but redesigned for a richer experience.
                    </p>
                </div>
                {/*  card   */}
                <div className={'w-[360px] h-[360px] border border-black rounded-[20px] bg-stone-200 relative p-4 flex flex-col relative my-11 hover:cursor-pointer group'}>
                    <div className={'relative overflow-hidden rounded-xl'}>
                        <img src={'/images/justincrediblemoments.jpg'} alt="My Image" className={'w-full h-full mt-2 rounded-xl object-cover object-center group-hover:scale-125 transition ease-in-out duration-300'}/>
                    </div>
                    <div className={'flex justify-between items-center my-2.5 '}>
                        <h3 className={'font-extrabold text-xl'}> JustIncredible <br/> Moments  </h3>
                        <div className={'flex flex-col text-right'}>
                            <span className={'text-sm font-regular text-xs'}> NextJS </span>
                            <span className={'text-sm font-regular text-xs'}> UI/UX Design </span>
                            <span className={'text-sm font-regular text-xs'}> TailwindCSS </span>
                        </div>
                    </div>
                    <hr className={'w-full bg-black border-black'}/>
                    <p className={'my-4'}> All the beauty and glory of a not-so-average photography portfolio. Photos curated by yours truly.
                    </p>
                </div>
            </div>
            {/* about me */}
            <div className={'relative'}>
                <div className={'relative flex my-6 '}>
                    <span className={'uppercase font-extrabold whitespace-nowrap text-2xl mt-11 mb-20 '}> about me  </span>
                    <div className={'absolute left-[123px] '}>
                        <Model/>
                    </div>
                </div>

                <div className={'h-[120px] w-[360px] rounded-[20px] flex items-center justify-center py-4 px-5 border border-black border-[1px] mb-3 '}>
                    <p>
                        I’m a creative developer ( he/him/his) currently based in Dallas, Texas. I’m really into CSS, animation, interaction, and learning new tools to add to my utility belt.
                    </p>
                </div>
                {/* bento boxes*/}
                <div className={'flex space-x-2.5'}>
                    <div className={'flex flex-col space-y-3'}>
                        {/*availabiliity*/}
                        <div className={'h-fit w-[230px] rounded-[20px] flex flex-col items-start justify-between space-y-8 py-4 px-5 border border-black border-[1px]'}>
                            <span className={'border border-black rounded-full w-fit px-2.5 uppercase '}> Availibility  </span>
                            <p className={'text-sm'}>
                                Im taking on freelance projects on a case-by-case basis. Reach out and touch faith. ↓
                            </p>
                        </div>
                        {/*contact*/}
                        <div className={'h-fit w-[230px] rounded-[20px] flex flex-col items-start justify-between space-y-8 py-4 px-5 border border-black border-[1px]'}>
                            <span className={'border border-black rounded-full w-fit px-2.5 uppercase '}> contact  </span>
                            <p className={'text-sm'}>
                                I’m most active and reachable via email. You can also check out my resume, if you’re into that sort of thing.
                            </p>
                        </div>
                    </div>
                    {/* links */}
                    <div className={'h-[335px] w-[120px] rounded-[20px] flex flex-col items-start py-4 px-5 border border-black border-[1px]'}>
                        <span className={'border border-black rounded-full w-fit px-2.5 uppercase self-center'}> Links  </span>
                        <ul className={'mt-9 space-y-1'}>
                            <li className={'text-sm hover:underline'}> <a href={'https://www.linkedin.com/in/justin-lee-0a5b3b1b1/'}> LinkedIn </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://github.com/justinkpeter'}> Github </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://twitter.com/_justinpeter'}> Twitter </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://www.instagram.com/justincrediblemoments/'}> Instagram </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://drive.google.com/file/d/1ayiPyZgDb2Flta2-o8vjNLeh5fb086ZZ/view?usp=share_link'}> Resume </a> </li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* footer */}
            <footer className={'my-5 w-full px-5'}>
                <hr className={'bg-black border-black'}/>
                <div className={'flex justify-between text-xs uppercase py-4'}>
                    <span> personal site </span>
                    <span> justin peter </span>
                </div>
            </footer>
        </div>


        <div className={'hidden sm:flex relative flex-col px-8 font-cabinet max-w-full bg-[#e0afa0]'}>
            <nav className={'flex flex-col pt-12 space-y-2.5 sticky top-0 backdrop-blur-lg z-[100]'}>
                <div className={'flex justify-between font-bold text-xs'}>
                    <span> ✶ JP23 </span>
                    <span className={'uppercase'}> Justin Peter  </span>
                </div>
                <hr className={'border-black'}/>
            </nav>
            {/*<div className={'relative h-[calc(100vh-3rem)] w-full flex flex-col lg:pt-6 xl:pt-12 2xl:pt-20 items-center bg-blue-200 '}>*/}
            <div className={'relative h-[calc(100vh-3rem)] w-full flex flex-col pt-[calc(5vh)] items-center'}>

                <Model/>
                <ArcText/>

                {/*<div className={'mt-[calc(3rem)]  2xl:mt-20 flex flex-col space-y-6 lg:space-y-7 font-panchang'}>*/}
                <div className={'mt-[calc(10vh)] flex flex-col space-y-6 lg:space-y-7 font-panchang'}>
                    <h1 className={'uppercase text-5xl lg:text-6xl 2xl:text-7xl font-bold'}> Justin Peter </h1>
                    <div className={'flex justify-between space-x-12 group'}>
                        <div className={'flex flex-col'}>
                            <h4 className={'uppercase text-xs lg:text-lg font-medium'}> Date </h4>
                            <span className={'uppercase text-[10px] lg:text-sm font-cabinet'}> 2023 </span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h4 className={'uppercase text-xs lg:text-lg font-medium'}> role </h4>
                            <span className={'uppercase text-[10px] lg:text-sm font-cabinet'}> front end dev & motion </span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h4 className={'uppercase text-xs lg:text-lg font-medium'}> location </h4>
                            <span className={'uppercase text-[10px] lg:text-sm font-cabinet'}> dallas, tx</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h4 className={'uppercase text-xs lg:text-lg font-medium'}> contact </h4>
                            <span className={'uppercase text-[10px] lg:text-sm font-cabinet'}> linkedin </span>
                        </div>
                    </div>
                </div>


            </div>

            <section className={'flex flex-col relative items-center space-y-36'}>
                <div className={'w-3/5 h-fit  flex-col flex'}>
                    <img
                        src={'https://images.unsplash.com/photo-1595177663993-4849619ab1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'}
                        alt={'image'}
                        className={'w-full h-[360px] object-cover rounded-[20px]'}
                    />
                    <div className={'flex my-9'}>
                        <span className={'text-[10px] mr-1.5 md:mr-2 lg:mr-2.5 font-medium'}> 01 </span>
                        <div className={'flex w-full justify-between'}>
                            <h3 className={'font-panchang font-semibold lg:text-3xl text-3xl uppercase'}> Blendify </h3>
                            <ul>
                                {
                                    ['React', 'Spotify API', 'Framer Motion'].map((item) => {
                                        return(
                                            <li key={item} className={'text-[10px] md:text-md lg:text-sm font-cabinet'}> { item } </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'w-3/5 h-fit  flex-col flex'}>
                    <img
                        src={'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'}
                        alt={'image'}
                        className={'w-full h-[360px] object-cover rounded-[20px]'}
                    />
                    <div className={'flex my-9'}>
                        <span className={'text-[10px] mr-1.5 md:mr-2 lg:mr-2.5 font-medium'}> 02 </span>
                        <div className={'flex w-full justify-between'}>
                            <h3 className={'font-panchang font-semibold lg:text-3xl text-3xl uppercase'}>
                                Justincredible
                                <br/>
                                moments
                            </h3>
                            <ul>
                                {
                                    ['NextJS', 'TailwindCSS', 'UI/UX Design'].map((item) => {
                                        return(
                                            <li key={item} className={'text-[10px] md:text-md lg:text-sm font-cabinet'}> { item } </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'mt-64 flex flex-col relative items-center'}>
                <h3 className={'text-5xl uppercase font-panchang font-semibold w-3/5'}> creative developer </h3>
                <p className={'my-14 w-3/5'}>
                    I’m Justin Peter (he/him/his), with a degree in Computer Engineering from the University of South Florida. I’m a creative developer who is really into animation, interaction, and learning new tools to add to my utility belt. What gets me excited is creating user experiences one line of code at a time; I believe it is through these user experiences, people can truly connect.
                </p>
                <div className={'w-3/5 flex justify-between space-x-9'}>
                    <div className={'h-40 w-full p-5 rounded-[10px] border border-black '}>
                        <span className={'h-6 w-28 border border-black rounded-full px-4 uppercase font-bold'}> Availability</span>
                        <p className={'my-8'}>
                            I'm taking on projects on a case-by-case basis. If you’re interested, reach out and touch faith.
                        </p>
                    </div>

                    <div className={'h-40 w-full p-5 rounded-[10px] border border-black '}>
                        <span className={'h-6 w-28 border border-black rounded-full px-4 uppercase font-bold'}> Contact </span>
                        <p className={'my-8'}>
                            I’m most active and reachable via email. You can also check out my resume, if you’re into that sort of thing.
                        </p>
                    </div>
                </div>
            </section>

            <section className={'mt-[26.5rem] font-panchang flex flex-col items-center'}>
                <h4 className={'uppercase text-xl font-light'}> I'd love to work with you </h4>
                <h2 className={'uppercase text-7xl font-bold stroke-black'} style={{WebkitTextStroke: '1px', WebkitTextStrokeColor:'#000000', WebkitTextFillColor: 'transparent' }}> work with me </h2>
            </section>

            <footer className={'mt-[21rem] mb-7'}>
                <hr className={'border-black mb-4'}/>
                <div className={'flex justify-between items-center  uppercase font-base'}>
                    <span className={'text-[10px] md:text-sm lg:text-md font-cabinet'}> © 2023 Justin Peter </span>
                    <span className={'text-[10px] md:text-sm lg:text-md font-cabinet'}> Software Engineer </span>
                    <span className={'text-[10px] md:text-sm lg:text-md font-cabinet'}> Built with NextJS & Tailwindcss </span>
                </div>
            </footer>

        </div>
      </main>
    </>
  )
}
