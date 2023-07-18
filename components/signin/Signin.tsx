'use client'
import { Button } from '@components/ui/Button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'



const Signin: FC = () => {
    return (<>
        <span className=' items-center flex flex-row justify-center '>
            <span className='text-[1.2rem] font-medium text-zinc-900 antialiased '>✨Welcome back to Devnode!</span>
        </span>
        <p className='text-sm text-zinc-600 antialiased font-normal'>
            Sign in to connect with the community , follow authors and topics you love , and interact with posts.
        </p>

        <Button
            variant="default"
            size="auto"
            className='mt-2'
            onClick={() => signIn('google')}
        >
            <FcGoogle size={20} />
            Google
        </Button>
        <Link className='text-xs mt-2 text-right text-zinc-600 font-thin underline ' href="/sign-up">New to devnode?</Link>
    </>)
}

export default Signin