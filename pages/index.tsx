import Head from 'next/head'
import Image from 'next/image'
import React, { Suspense, useEffect, lazy } from "react";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/solid";


import {Canvas, extend} from "@react-three/fiber";
// import {Model} from '../components/Justin';
import { OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic'

        // dynamic import justin.tsx with ssr set to false
const Justin = dynamic(() => import('../components/Justin'), { ssr: false })

export default function Home() {

    useEffect(() => {
        const text = document.querySelector<HTMLElement>('.text');
        if(text === null)
            return;
        else if(text && text.textContent){
            text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter inline-block uppercase origin-[0_70px] absolute top-20 left-24 font-medium'>$&</span>");

            const element = document.querySelectorAll<HTMLElement>('.letter');
            if(element === null)
                return;
            else if(element){
                element.forEach((el, index) => {
                    el.style.transform = `rotate(${index * 15.5}deg)`;
                });

                document.addEventListener('scroll', () => {
                    const scrollY = window.scrollY;
                    const rotate = scrollY / 5;
                    element.forEach((el, index) => {
                        el.style.transform = `rotate(${index * 15.7 + rotate}deg)`;
                    });
                })
            }
        }
    })


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

          {/*<Canvas*/}
          {/*    camera={{ position: [0, 0, 8.25], fov: 3.3 }}*/}
          {/*    style={{*/}
          {/*        // backgroundColor: '#111a21',*/}
          {/*        width: '100%',*/}
          {/*        height: '100%',*/}
          {/*    }}*/}
          {/*>*/}

          {/*    <Suspense fallback={null}>*/}
          {/*        <Justin position={[0, -1.70, 0]} />*/}
          {/*    </Suspense>*/}
          {/*    <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={5} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} reverseOrbit={true} />*/}
          {/*</Canvas>*/}

        <div className={'mt-[70px] mb-11 px-3.5 flex flex-col items-center justify-center  font-cabinet'}>
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
                        <img src={'/images/justincrediblemoments.jpg'} alt="My Image" className={'w-full h-[150px] mt-2 rounded-xl object-cover object-center group-hover:scale-125 transition ease-in-out duration-300'}/>
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
                <h2 className={'uppercase font-extrabold text-2xl my-11'}> about me  </h2>
                <h4 className={'absolute top-0 right-44 text text-xs'}> creator ✶ designer ✶ coder ✶ </h4>
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
                            hi
                            <li className={'text-sm hover:underline'}> <a href={'https://www.linkedin.com/in/justin-lee-0a5b3b1b1/'}> LinkedIn </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://github.com/justinkpeter'}> Github </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://twitter.com/_justinpeter'}> Twitter </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://www.instagram.com/justincrediblemoments/'}> Instagram </a> </li>
                            <li className={'text-sm hover:underline'}> <a href={'https://drive.google.com/file/d/1ayiPyZgDb2Flta2-o8vjNLeh5fb086ZZ/view?usp=share_link'}> Resume </a> </li>
                        </ul>
                    </div>
                </div>
                {/* footer */}
                <footer className={'my-12 px-5'}>
                    <hr className={'bg-black border-black'}/>
                    <div className={'flex justify-between text-xs uppercase py-2'}>
                        <span> personal site </span>
                        <span> justin peter </span>
                    </div>
                </footer>
            </div>
        </div>
      </main>
    </>
  )
}
