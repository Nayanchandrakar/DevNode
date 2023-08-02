import CreateCommunity from '@components/community/CreateCommunity'
import ViewCommunity from '@components/community/ViewCommunity'
import { getserverSession } from '@lib/auth'
import { db } from '@lib/db'
import { redirect } from 'next/navigation'


const Page = async ({ }) => {
    const session = await getserverSession()

    if (session) {
        const community = await db?.community?.findFirst({
            where: {
                ownerId: session?.user?.id,
            }
        })

        if (community) {
            return <ViewCommunity />
        } else {
            return <CreateCommunity />
        }
    } else {
        return redirect('/sign-in')
    }

}

export default Page