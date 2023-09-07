import * as React from "react"

import { cn } from "@lib/lib"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const MiniInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full transition-colors duration-300 rounded-md border border-slate-200  bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500  disabled:cursor-not-allowed disabled:opacity-50  dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
MiniInput.displayName = "MiniInput"

export { MiniInput }
