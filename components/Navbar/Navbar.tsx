import { FC } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import StaticNavigation from './StaticNavigation'
import Container from '@components/container/Container'

const Navbar: FC = () => {
    // mx-auto  max-w-[1500px] 
    return <header className=' sticky top-0 w-full h-full  border-b border-b-zinc-200 py-3 '>
        <Container className='bg-white px-6 sm:px-8 md:px-10 lg:px-12'>
            <nav className='flex flex-row justify-between items-center'>

                {/* Logo here */}
                <Logo />

                {/* Navigation here */}
                <Navigation />

                {/* Static Navigation here */}
                <StaticNavigation />
            </nav>
        </Container>
    </header>
}

export default Navbar