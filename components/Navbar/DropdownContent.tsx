import { FC } from 'react'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@components/ui/Dropdown"
import { FaUserCircle } from 'react-icons/fa'


const DropdownContent: FC = () => {

    const isAuthenticated = false

    return (
        <>
            <div className="w-[2.4rem] h-[2.4rem] cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <FaUserCircle
                            size={10}
                            className='w-full h-full'
                        />
                    </DropdownMenuTrigger>

                    {/* for authenticated users */}
                    {isAuthenticated ?
                        (<DropdownMenuContent className="w-56 bg-white mt-5 mr-4 ">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                            <DropdownMenuGroup>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>)

                        // for not authenticated users 
                        : (<DropdownMenuContent className="w-56 bg-white mt-5 mr-4 ">
                            <DropdownMenuItem>Login</DropdownMenuItem>
                            <DropdownMenuItem>Sign up</DropdownMenuItem>
                            <DropdownMenuGroup>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>)
                    }

                </DropdownMenu>
            </div >
        </>
    )
}

export default DropdownContent