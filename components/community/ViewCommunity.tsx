import { FC } from 'react'
import Container from '@components/container/Container'
import Topbar from '@components/global/Topbar/Topbar'
import TextShowcase from '@components/global/Textshow/TextShowcase'
import { FaEarthEurope } from 'react-icons/fa6'
import { SlCalender } from 'react-icons/sl'
import { Button, buttonVariants } from '@components/ui/Button'
import { MdOutlineRememberMe } from 'react-icons/md'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { MiniInput } from '@components/ui/MiniInput'
import RenderPosts from './server/RenderPosts'
import Link from 'next/link'

interface ViewCommunityProps {
    community: unknown
}

const ViewCommunity: FC<ViewCommunityProps> = ({ community }) => {

    return <section className=''>
        <Container>
            <Topbar communityName={'nayan'} className='mt-8' />
            <div className="flex flex-col gap-3 my-[6rem] justify-between ">
                <div className="flex flex-row justify-between gap-5">
                    <TextShowcase
                        Icon={FaEarthEurope}
                        Data="nayan-coder"
                    />

                    <TextShowcase
                        Icon={SlCalender}
                        Data={'12/23/2003'}
                    />

                </div>

                <div className="flex flex-row justify-between">
                    <TextShowcase
                        Icon={MdOutlineRememberMe}
                        Data={'2.2'}
                    />

                    <TextShowcase
                        Icon={BsFillFileEarmarkPostFill}
                        Data={'23'}
                    />

                </div>

                <div className="flex flex-row justify-between ">
                    <TextShowcase
                        Icon={FaEarthEurope}
                        Data="www.nayancoder-com"
                    />

                    <Button className='w-fit'>
                        Follow
                    </Button>

                </div>


                {/* Posts div from here */}
                <div className='mt-8'>
                    <span className='flex justify-center w-full h-full text-2xl antialiased font-semibold'>Your Posts...</span>

                    <div className="flex flex-row my-8 justify-between">
                        <MiniInput
                            className='w-[8rem] sm:w-fit '
                            placeholder='Search Posts'
                        />
                        <Link href='/create/post' className={buttonVariants({ variant: 'default' })}>
                            Create a post
                        </Link>
                    </div>
                    <RenderPosts />
                </div>
            </div>
        </Container>
    </section>
}

export default ViewCommunity