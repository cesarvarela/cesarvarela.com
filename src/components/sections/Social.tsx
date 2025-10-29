import React, { useState, useEffect } from 'react'
import { Section as SectionBase } from '../Section'
import Image from 'next/image'
import { SocialLink } from '../../types/data'

import StackOverflow from '../../svg/stackoverflow.svg'
import Linkedin from '../../svg/linkedin.svg'
import Github from '../../svg/github.svg'
import Lastfm from '../../svg/lastfm.svg'
import Facebook from '../../svg/facebook.svg'
import Twitter from '../../svg/twitter.svg'

const iconsMap: Record<string, React.ReactElement> = {
    'stack-overflow': <StackOverflow />,
    'linkedin': <Linkedin />,
    'github': <Github />,
    'lastfm': <Lastfm />,
    'facebook': <Facebook />,
    'twitter': <Twitter />,
}


interface SocialItem {
    key: string;
    description: string;
    link: string;
}

// Mock data for social items - in a real app, you would fetch this from an API or import from a JSON file
const socialItems: SocialItem[] = [
  {
    key: "github",
    description: "GitHub",
    link: "https://github.com/cesarvarela"
  },
  {
    key: "linkedin",
    description: "LinkedIn",
    link: "https://www.linkedin.com/in/cesarvarela/"
  },
  {
    key: "twitter",
    description: "Twitter",
    link: "https://twitter.com/cesarvarela"
  },
  {
    key: "stack-overflow",
    description: "Stack Overflow",
    link: "https://stackoverflow.com/users/1233021/cesar-varela"
  }
];

export function Social() {
    const [items, setItems] = useState<SocialItem[]>([]);

    useEffect(() => {
        // In a real app, you would fetch this data from an API
        // For now, we'll use the mock data
        setItems(socialItems);
    }, []);

    return (
        <SectionBase id="social" subtitle="Social" className="mt-60">
            <div className="flex flex-col items-end mt-15 mx-15">
                <div className="bg-[#2388FF] rounded-lg w-max p-3 text-white my-1 relative">
                    Let's network!
                </div>
                <div className="bg-[#2388FF] rounded-lg w-max p-3 text-white my-1 relative">
                    <ul className="list-none p-0">
                        {
                            items.map((item, index) => {
                                return (
                                    <li key={index} className="m-0 p-1.5 inline-block md:p-3">
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener"
                                            className="text-white text-3xl"
                                        >
                                            <div className="w-6 h-6 fill-white">
                                                <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
                                                    {iconsMap[item.key]}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="absolute -right-12 bottom-1 w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                            src="/images/po.png" 
                            alt="po face" 
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="absolute right-2 -bottom-6 text-[#5E5E5E] text-xs">
                        Cesar Varela, just now.
                    </div>
                </div>
            </div>
        </SectionBase>
    );
}