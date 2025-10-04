import React from 'react'
import WrapperSections from './atoms/WrapperSections'
import HeadingTitle from './atoms/HeadingTitle'
import { services } from '@/constants/services'
import Tag from './atoms/Tag'

const Services = () => {
    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle classname="mt-3" title="Services" />
            </WrapperSections>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {services.map(({ description, technologies, title }) => (
                    <section className='flex flex-col gap-3 border-2 border-primary rounded-lg'>
                        <h4 className='md:text-[2vw] text-xl border-b border-b-primary p-3 max-sm:text-3xl font-bold'> {title} </h4>
                        <section className='flex flex-col justify-between h-full'>

                            <p className='p-3 pb-0'> {description} </p>
                            <section className='flex items-center gap-2 flex-wrap p-3'>
                                {technologies.map((tech) => (
                                    <Tag tag={tech} />
                                ))}
                            </section>
                        </section>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Services
