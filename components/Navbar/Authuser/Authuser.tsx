'use client'
import { FC } from "react"
import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@components/ui/Dropdown"
import { signOut } from 'next-auth/react'
import { Session } from "next-auth"
import { useRouter } from "next/navigation"


interface AuthuserProps {
    user: Session | null,
}


const Authuser: FC<AuthuserProps> = ({
    user
}) => {


    const router = useRouter()

    return (
        <>
            {user ?
                (<DropdownMenuContent className="w-56 bg-white mt-5 mr-4 ">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                    <DropdownMenuGroup>
                    </DropdownMenuGroup>
                </DropdownMenuContent>)

                // for not authenticated users 
                : (<DropdownMenuContent className="w-56 bg-white mt-5 mr-4 ">
                    <DropdownMenuItem onClick={() => router.push('/sign-in')}>Login</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/sign-up')} >Sign up</DropdownMenuItem>
                    <DropdownMenuGroup>
                    </DropdownMenuGroup>
                </DropdownMenuContent>)
            }

        </>
    )
}
export default Authuser 