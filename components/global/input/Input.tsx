import { FC, forwardRef } from "react"
import { cn } from "@lib/lib"

// interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
//     disabled?: boolean,
//     label?: string,
//     error?: string | undefined,
// }

// const Input: FC<InputProps> = ({ className, ...props }) => {

//     const { label, error, disabled } = props

//     return (
//         <div className="flex flex-col gap-2 w-full h-fit">
//             <label className='font-semibold antialiased text-base text-slate-600'>{label}</label>
//             <input
//                 className={cn('outline-none focus-visible:border-blue-600 p-4 border-[1.5px] focus-visible:bg-white bg-light-blue transition-colors duration-150 antialiased  rounded-lg border-zinc-200 disabled:cursor-not-allowed', { 'border-red-500 ': error }, className)}
//                 {...props}
//                 disabled={disabled}
//             />
//             {<span className={`text-sm font-medium antialiased transition-colors duration-150 text-red-600 ${error ? 'opacity-100' : 'opacity-0'}`}>{error}</span>}
//         </div>
//     )
// }
// export default Input


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean,
    label?: string,
    error?: string | undefined,
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {

        const { label, error, disabled } = props

        return (
            <div className="flex flex-col gap-2 w-full h-fit">
                <label className='font-semibold antialiased text-base text-slate-600'>{label}</label>
                <input
                    className={cn('outline-none focus-visible:border-blue-600 p-4 border-[1.5px] focus-visible:bg-white bg-light-blue transition-colors duration-150 antialiased  rounded-lg border-zinc-200 disabled:cursor-not-allowed', { 'border-red-500 ': error }, className)}
                    {...props}
                    disabled={disabled}
                    ref={ref}
                />
                {<span className={`text-sm font-medium antialiased transition-colors duration-150 text-red-600 ${error ? 'opacity-100' : 'opacity-0'}`}>{error}</span>}
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input