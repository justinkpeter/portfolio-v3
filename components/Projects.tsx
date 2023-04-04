import React from 'react';
import {Divider} from "@/components/Divider";
import {ProjectType} from "@/utils/userData";
import Link from "next/link";
interface ProjectsProps {
    projects: ProjectType[]
}

interface ProjectsProps {
    projects: ProjectType[]
}

export const Projects = ({projects}:ProjectsProps) => {

    const dividerLabels: string[] = ['2.0', 'recent projects', 'creative works'];

    return (
        <>
            <section id={'projects'} className={'h-fit relative my-36 sm:my-80 pt-14 pb-10 z-0'}>
                <Divider showLabels={true} labels={dividerLabels}/>
                <div className={'relative'}>
                    {projects.length && projects.map((project) => {
                        return(
                            <div className={'relative flex flex-col space-y-8 sm:flex-row my-16 lg:my-48 h-fit sm:h-[150vh]'} key={project.title}>
                                <div className={'sm:sticky top-16 h-fit w-full sm:w-1/2  break-words pr-[calc((100%-125px)/10)]'}>
                                    <Link href={project.link}
                                          target={'_blank'}
                                          rel={'noopener noreferrer'}
                                          className={'text-5xl md:text-8xl lg:text-9xl font-semibold font-panchang uppercase underline cursor-hover-item '}
                                          data-cursor-text={' SEE MORE *'}
                                          data-cursor-text-repeat="4"
                                    >
                                        {project.title}
                                    </Link>
                                    <p className={'uppercase  md:text-2xl lg:text-3xl md:w-72 sm:ml-[25%] mt-10 sm:mt-20 font-medium '}> {project.description} </p>
                                </div>
                                <Link className={'relative w-[100%] h-[60vh] sm:h-full sm:w-full sm:w-1/2 group transition-all duration-300 show-cursor z-0 cursor-hover-item'}
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                    data-cursor-text={'SEE MORE *'}
                                    data-cursor-text-repeat="4"
                                    href={project.link}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                >
                                </Link>
                            </div>
                        )
                    }) }
                </div>
            </section>
        </>
    );
}