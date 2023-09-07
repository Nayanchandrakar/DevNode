import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'
import { cn } from '@lib/lib'

interface TextShowcaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: IconType,
    Data: String,
    color?: string,
    IconSize?: number
}

const TextShowcase: FC<TextShowcaseProps> = ({ Icon, Data, color, IconSize, className, ...props }) => {
    return <span className={cn('flex flex-row justify-center items-center gap-3 w-fit', className)}>
        <Icon size={IconSize || 20} color={color || 'black'} />
        <strong className='bg-clip-text text-transparent bg-gradient antialiased text-sm first-letter:uppercase' {...props}>{Data}</strong>
    </span>
}

export default TextShowcase