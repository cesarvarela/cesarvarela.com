import React from 'react'
import { Section as SectionBase } from '../Section'
import Codewindow from '../CodeWindow'

const code = `class Cesar extends Human {

    languages(): string[] {

        return ['Javascript', 'Typescript', 'Swift', 'C#', 'ActionScript 3', 'PHP', 'GO']
    }

    frameworksAndLibraries(): string[] {

        return ['React', 'Angular', 'Express', 'Next.js', 'GraphQL']
    }

    stacksAndPlatforms(): string[] {

        return ['Node.js', 'iOS', '.NET', 'Unity 3D', 'MERN', 'Electron']
    }

    software(): string[] {

        return ['Visual Studio/VSCode', 'Xcode', 'Photoshop', 'Unity 3D', 'Sketch', 'Figma', 'Chrome DEV tools']
    }
}

//TODO: messed up SEO of this section but was totally worth it xD
`


export function About(): JSX.Element {
    return (
        <SectionBase subtitle="Tech">
            <p className="text-lg leading-5 mx-auto">
                Over the years I've worked on <b>many</b> different projects each with different requirements and challenges, here are some of the tools that helped me
            </p>
            <div className="mt-10 mx-auto">
                <Codewindow title="skills.js" source={code} />
            </div>
        </SectionBase>
    );
}