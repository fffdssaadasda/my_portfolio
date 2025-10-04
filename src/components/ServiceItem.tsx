import React from 'react'
import Tag from './atoms/Tag'
import { IconType } from 'react-icons';
interface Props {
    title: string;
    Icon: IconType;
    color: string;
    description: string;
    technologies: {
        name: string;
        icon: IconType;
        color: string;
    }[];
}[]
const ServiceItem = ({ Icon, color, description, technologies, title }: Props) => {
    return (
        <section className='flex flex-col gap-3 border-[3px] dark:border-accent border-primary  rounded-lg'>
            <h4 className='md:text-[2vw] text-xl border-b-[3px] dark:border-b-accent border-primary leading-[1.2] p-3 max-sm:text-3xl font-bold flex gap-4'>
                <Icon style={{ color }} />
                {title}
            </h4>
            <section className='flex flex-col justify-between h-full'>
                <p className='p-3 pt-0 pb-0 text-lg leading-[1.3] '> {description} </p>
                <section className='flex items-center gap-2 flex-wrap p-3'>
                    {technologies.map(({ name, icon, color }) => {
                        const Icon = icon
                        return (
                            <Tag tag={name} icon={<Icon />} color={!!(name === "Next.js") ? undefined : color} />
                        )
                    })}
                </section>
            </section>
        </section>
    )
}

export default ServiceItem
