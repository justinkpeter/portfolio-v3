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
            <section id={'projects'} className={'h-fit relative my-80 pb-10 '}>
                <Divider showLabels={true} labels={dividerLabels}/>
                {projects.length && projects.map((project) => {
                    return(
                        <div className={'flex my-16 lg:my-48 h-[150vh]'} key={project.title}>
                            <div className={'sticky top-16 z-[30] h-fit w-1/2  break-words pr-[calc((100%-125px)/10)]'}>
                                <h2 className={'md:text-8xl lg:text-9xl font-semibold font-panchang uppercase underline'}> {project.title} </h2>
                                <p className={'uppercase  md:text-2xl lg:text-3xl w-72 ml-[25%] mt-20 font-medium '}> {project.description} </p>
                            </div>
                            <div className={'w-1/2 z-0'}>
                                <img src={project.image} alt={project.title} className={'w-full h-full object-cover z-[30]'}/>
                            </div>
                        </div>
                    )
                }) }
            </section>
        </>
    );
}