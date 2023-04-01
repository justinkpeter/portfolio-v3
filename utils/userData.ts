export type ProjectType = {
    title: string;
    description: string;
    link: string;
    image: string;
}

type UserType = {
    name: string;
    email: string;

    projects: ProjectType[];
    hobbies: string[];

}

export const userData:UserType = {
    name: "John Doe",
    email: "hello@justinpeter.dev",
    projects: [
        {
            title: "Blendify",
            description: "An anaysis and discovery tool for spotify users",
            link: "",
            image: '/images/blendify.jpg'
        },
        {
            title: "JustIncredible Moments",
            description: "All the aesthetics of a not-so-average photography portfolio.",
            link: "",
            image: '/images/justincrediblemoments.jpg'
        }
    ],
    hobbies: ['Portraits', 'Coding', 'Music']
}