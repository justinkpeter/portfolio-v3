import Head from 'next/head'
import React, {useEffect} from "react";
import {Navbar} from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import {Introduction} from "@/components/Introduction";
import {Projects} from "@/components/Projects";
import {AboutMe} from "@/components/AboutMe";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";
import {userData} from "@/utils/userData";

export default function Home() {

    useEffect(() => {
      //remove any console warnings
        console.clear()
        const styles = [
            // 'color: green',
            'background: tan',
            'font-size: 12px',
            'font-family: monospace',
            'padding: 10px',
        ].join(';');
        console.log('%c👋🏾 Hey! Thank\'s for stopping by!', styles);
        console.log('%cDeveloped by Justin Peter.', styles);

    }, [])

    return (
    <>
      <Head>
        <title>Justin Peter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
          {/*<CustomCursor/>*/}
          <div className={'relative bg-[#f1e7e4] flex flex-col w-screen items-center cursor-none selection:bg-stone-400 selection:text-white'}>
              <div className={'relative px-[5vw] w-screen max-w-[2038px]'}>
                  <Navbar/>
                  <Hero/>
                  <Introduction/>
                  <Projects projects={userData.projects}/>
                  <AboutMe/>
                  <Contact/>
                  <Footer/>
              </div>
          </div>
      </main>
    </>
  )
}
