import React from 'react'
import { SkillItem } from './SkillItem'
import { Section } from './Section'

export function About({ skills }) {

    return <Section id="about" subtitle="tech">
        <div className="skills">
            <h3>Skills</h3>
            <p>Analysis, design and software development.</p>

            <h3>Technologies</h3>
            <p>Over the years I've worked on lots of different projects with different requirements and challenges, here is some of the tools that helped me get thorugh them.</p>

            <div className="row">
                {
                    skills.map((skillList) => {
                        return <div>
                            <h4>{skillList.name}</h4>
                            <ul>
                                {
                                    skillList.items.map((item, index) => {
                                        return <SkillItem name={item.name} key={index} />
                                    })
                                }
                            </ul>
                        </div>
                    })
                }
            </div>
        </div>

        <h3 className="cv"><a target="_blank" href="/assets/curriculum.pdf">
            You can also download my CV here <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
        </h3>
    </Section>
}