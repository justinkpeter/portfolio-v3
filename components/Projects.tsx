import React from 'react';
import {Divider} from "@/components/Divider";
import {ProjectType} from "@/utils/userData";
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
            <section id={'projects'} className={'h-fit relative my-36 sm:my-80 pt-14 pb-10 '}>
                <Divider showLabels={true} labels={dividerLabels}/>
                {projects.length && projects.map((project) => {
                    return(
                        <div className={'flex flex-col space-y-8 sm:flex-row my-16 lg:my-48 h-fit sm:h-[150vh]'} key={project.title}>
                            <div className={'sm:sticky top-16 z-[30] h-fit w-full sm:w-1/2  break-words pr-[calc((100%-125px)/10)]'}>
                                <h2 className={'text-5xl md:text-8xl lg:text-9xl font-semibold font-panchang uppercase underline'}> {project.title} </h2>
                                <p className={'uppercase  md:text-2xl lg:text-3xl w-72 sm:ml-[25%] mt-10 sm:mt-20 font-medium '}> {project.description} </p>
                            </div>
                            <div className={'w-full sm:w-1/2 z-0'}>
                                <img src={project.image} alt={project.title} className={'w-full h-full object-cover z-[30]'}/>
                            </div>
                        </div>
                    )
                }) }
            </section>
        </>
    );
}