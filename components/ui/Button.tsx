import { cn } from "@lib/lib";
import { cva, VariantProps } from 'class-variance-authority'
import * as React from "react"
import { BiLoaderAlt } from 'react-icons/bi'


const buttonVariants = cva(
    "flex justify-center flex-row gap-1.5 rounded-md items-center transition-colors duration-300 font-medium antialised cursor-pointer",

    {
        variants: {
            variant: {
                default: 'bg-black text-zinc-300 text-sm hover:bg-black/90 rounded-lg',
                destructive: 'bg-red-600 text-zinc-100 text-sm hover:bg-red-600/90',
                iconRounded: 'bg-indigo-600 text-zinc-200 text-sm hover:bg-indigo-600/80 rounded-full'
            },
            size: {
                default: 'py-2 px-4',
                auto: "w-full h-full py-2 px-4"
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        }
    },
)


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, isLoading, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading}

                {...props}>

                {/* if loading then loader will be shown */}
                {isLoading ? <BiLoaderAlt className="animate-spin" /> : null}
                {children}

            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }