import { cn } from '@lib/lib'
import { FC } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
    return <div className={cn('mx-auto max-w-[1500px] px-6 sm:px-8 sticky top-0 w-full h-full md:px-10 lg:px-12', className)}
        {...props}
    >
        {children}
    </div>
}

export default Container