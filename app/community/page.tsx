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
            },
            include: {
                followers: true,
                posts: true
            }
        })

        if (community) {
            return <ViewCommunity community={community} />
        } else {
            return <CreateCommunity />
        }
    } else {
        return redirect('/sign-in')
    }


    // return <ViewCommunity community={'nayan'} />


}

export default Page