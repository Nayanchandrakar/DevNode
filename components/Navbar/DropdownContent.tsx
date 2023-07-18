import { FC } from 'react'
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@components/ui/Dropdown"
import { FaUserCircle } from 'react-icons/fa'
import { getserverSession } from '@lib/auth'
import Authuser from './Authuser/Authuser'
import Image from 'next/image'



const DropdownContent: FC = async () => {

    const user = await getserverSession()


    return (
        <>
            <div className="w-[2.4rem] h-[2.4rem] cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {user?.user?.image ?
                            <Image
                                src={user?.user?.image}
                                alt='nav_logo'
                                className='rounded-full w-11 h-10'
                                referrerPolicy='no-referrer'
                                width={10}
                                height={10}
                                sizes='100'
                            />
                            :
                            <FaUserCircle
                                size={10}
                                className='w-full h-full'
                            />
                        }
                    </DropdownMenuTrigger>

                    <Authuser
                        user={user}
                    />

                </DropdownMenu>
            </div >
        </>
    )
}

export default DropdownContent