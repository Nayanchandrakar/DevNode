import { cn } from "@lib/lib"
import Image from "next/image"
import React, { FC } from "react"

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
    communityName: String,
}

const Topbar: FC<TopbarProps> = ({ communityName, className, ...props }) => {
    return (
        <div className={cn('w-full relative h-fit', className)} {...props}>
            <Image
                alt="image_not_available"
                src="/community/community.jpg"
                sizes="100"
                className="w-full h-[20rem] object-cover rounded-t-xl border-b-[8px] border-b-black"
                width={10}
                height={10}
            />

            <span className="bg-white border-[8px] border-black rounded-full flex justify-center items-center w-[7rem] h-[7rem] antialiased absolute bottom-[-3.4rem] left-[2rem] text-2xl font-bold ">{communityName?.slice(0, 2)}</span>
        </div>
    )
}

export default Topbar