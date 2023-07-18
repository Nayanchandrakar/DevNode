import Signin from '@components/signin/Signin'
import Link from 'next/link'
import { FC } from 'react'
import { FaGreaterThan } from 'react-icons/fa'



const page: FC = () => {
    return (
        <div className="mx-auto max-w-[30rem]">
            <div className="mt-[12rem] flex justify-center flex-col items-center">
                <div className="flex justify-start w-full mb-6">
                    <Link href="/" className='flex flex-row text-zinc-600 font-medium justify-center text-start items-center' >
                        back<FaGreaterThan size={10} />
                    </Link>
                </div>
                <Signin />
            </div>
        </div>
    )
}

export default page