import { Button } from '@components/ui/Button'
import { FC } from 'react'
import { BsSearch } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import DropdownContent from './DropdownContent'

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
        <Button className='bg-gradient' variant="iconRounded" >
            <CiEdit
                size={20}
                color='white'
            />
            Create
        </Button>

        {/* Avatar button with menu */}
        <DropdownContent />


    </div>
}

export default StaticNavigation