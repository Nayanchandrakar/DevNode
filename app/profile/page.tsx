import { redirect } from 'next/navigation'
import { getserverSession } from "@lib/auth"
import UpdatedProfile from '@components/profile/UpdateProfile'

const Page = async () => {

    const session = await getserverSession()

    if (!session?.user) {
        redirect('/sign-in')
    }

    return <UpdatedProfile user={session?.user?.profile} />
}
export default Page