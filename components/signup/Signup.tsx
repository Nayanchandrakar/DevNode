'use client'
import { Button } from '@components/ui/Button'
import Link from 'next/link'
import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'



const Signup: FC = () => {

    return (<>
        <span className=' items-center flex flex-row justify-center '>
            <span className='text-[1.2rem] font-medium text-zinc-900 antialiased '>✨Welcome to Devnode!</span>
        </span>

        <p className='text-sm text-zinc-600 antialiased font-normal'>
            Sign up to  connect with the community , follow authors and topics you love , and interact with posts.
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

        <Link className='text-xs text-right text-zinc-600 font-thin underline ' href="/sign-in">Already have an account?</Link>

    </>)
}

export default Signup