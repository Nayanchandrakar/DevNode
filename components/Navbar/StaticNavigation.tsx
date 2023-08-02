import { Button, buttonVariants } from '@components/ui/Button'
import { FC } from 'react'
import { BsSearch } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import DropdownContent from './DropdownContent'
import Link from 'next/link'

const StaticNavigation: FC = () => {
    return <div className='flex justify-between flex-row gap-3'>

        {/* search icon here */}
        <span className='border border-transparent hover:border-zinc-200 p-2 transition-colors duration-300 rounded-full cursor-pointer'>
            <BsSearch
                size={20}
                className=''
                color='black'
            />
        </span>

        {/* post write button */}
        <Link href="/community" className={buttonVariants({ variant: 'iconRounded', className: 'bg-gradient' })}  >
            <CiEdit
                size={20}
                color='white'
            />
            Create
        </Link>

        {/* Avatar button with menu */}
        <DropdownContent />


    </div>
}

export default StaticNavigation