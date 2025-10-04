import React from 'react'
import WrapperSections from './atoms/WrapperSections'
import HeadingTitle from './atoms/HeadingTitle'
import { services } from '@/constants/services'
import Tag from './atoms/Tag'
import ServiceItem from './ServiceItem'

const Services = () => {
    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle classname="mt-3" title="Services" />
            </WrapperSections>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {services.map((service) => (
                    <ServiceItem {...service} />
                ))}
            </section>
        </>
    )
}

export default Services
