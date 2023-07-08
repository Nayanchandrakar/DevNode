'use client'
import { FC } from 'react'
import { GrClose } from 'react-icons/gr'
import { useRouter } from 'next/navigation'


const CloseModal: FC = () => {
    const router = useRouter()

    return (
        <GrClose
            size={18}
            color='black'
            className='w-fit h-fit p-1 bg-transparent transition-all duration-300 hover:bg-zinc-200 cursor-pointer rounded-full'
            onClick={() => router.back()}
        />
    )

}

export default CloseModal