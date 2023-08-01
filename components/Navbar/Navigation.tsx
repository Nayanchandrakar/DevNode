import { NavigationMenu, NavigationElemProps } from '@constants/Navigation'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className="hidden flex-row gap-4 md:flex items-center justify-center">
            {NavigationMenu?.map((elem) => {

                let { id, label, redirect }: NavigationElemProps = elem
                return (
                    <Link href={redirect} key={id} className='px-3 text-sm font-medium antialiased text-zinc-600 py-1.5 rounded-full border transition-colors border-transparent hover:border-zinc-200 duration-300 hover:text-violet-600 '>{label}</Link>
                )
            })}
        </div>
    )
}
export default Navigation