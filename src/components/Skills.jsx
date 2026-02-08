import React from 'react'
import { coreTechnologies } from '../constants'
import DecryptedText from './animation/DecryptedText'
import SkillsBadge from './SkillsBadge'

const Skills = () => {
  return (
    	<section className="mt-32 space-y-6">
				<h3 className="opacity-30 uppercase tracking-[0.4em] text-[10px] mb-8">
          <DecryptedText text="Core_Technologies" animateOn="both" speed={40} characters="1010101" revealDirection='center'/>
				</h3>
				<div className="inline-flex flex-wrap gap-x-4 gap-y-2 max-w-125">
					{
						/* Using constants to map through core technologies */
						coreTechnologies.map((tech) => {
                            const color = tech.color.slice(0, -1);
                            const num = tech.color.at(-1)
                            const parentClass = `border-${color}-${num}00/20 bg-${color}-${num}00/5 hover:border-${color}-${num}00`;
                            const childClass = `bg-${color}-${num}00/5 border-${color}-${num}00/20 group-hover:bg-${color}-${num}00`
                            return (
                                <>
                               <SkillsBadge parentClass={parentClass} childClass={childClass} id={tech.id} name={tech.name} />
                                </>
                            )
                        })
                           
					}
          	
				</div>
			</section>
  )
}

export default Skills