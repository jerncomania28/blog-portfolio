


export interface DataProps {
    name: string;
    technologies: string;
    liveUrl: string;
    sourceUrl: string;
    projectDescription: string;
    imagePath: string;
    href: string;
}

export interface MouseAnimationProps {
    textEnter: () => void;
    textLeave: () => void;
}