import { FC } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import StaticNavigation from './StaticNavigation'

const Navbar: FC = () => {
    return <header className='mx-auto max-w-[1500px] px-6 sm:px-8 sticky top-0 w-full h-full md:px-10 lg:px-12 border-b border-b-zinc-200 py-3'>
        <nav className='flex flex-row justify-between items-center'>

            {/* Logo here */}
            <Logo />

            {/* Navigation here */}
            <Navigation />

            {/* Static Navigation here */}
            <StaticNavigation />
        </nav>
    </header>
}

export default Navbar