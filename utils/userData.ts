export type ProjectType = {
    title: string;
    description: string;
    link: string;
    image: string;
}

type SocialType = {
    name: string;
    link: string;
}

type UserType = {
    name: string;
    email: string;

    projects: ProjectType[];
    hobbies: string[];

    socials: SocialType[];

}



export const userData:UserType = {
    name: "John Doe",
    email: "hello@justinpeter.dev",
    projects: [
        {
            title: "Blendify",
            description: "An analysis and discovery tool for spotify users",
            link: "https://blendify.xyz",
            image: '/images/blendify.jpg'
        },
        {
            title: "JustIncredible Moments",
            description: "All the aesthetics of a not-so-average photography portfolio",
            link: "https://justincrediblemoment.com",
            image: '/images/justincrediblemoments.jpg'
        }
    ],
    socials:
    [
        {
            name: 'github',
            link: 'https://github.com/justinkpeter'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/justinkmpeter/'
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/_justinpeter'
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/justincrediblemoments/'
        }
    ],
    hobbies: ['Portraits', 'Coding', 'Music']
}