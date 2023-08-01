'use client'
import Container from '@components/container/Container'
import Input from '@components/global/input/Input'
import { FC } from 'react'
import { profileSchema } from '@schema/zodSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@components/ui/Button'
import Textarea from '@components/global/textarea/Textarea'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '@hooks/use-toast'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'


interface UpdatedProfileProps {
    user: any
}

const UpdatedProfile: FC<UpdatedProfileProps> = ({ user }) => {

    const { toast } = useToast()
    const router = useRouter()

    type profileSchemaType = z.infer<typeof profileSchema>
    const { register, handleSubmit, formState: { errors } } = useForm<profileSchemaType>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            username: user?.username || '',
            Location: user?.Location || '',
            LinkedinUrl: user?.LinkedinUrl || '',
            githubProfile: user?.githubProfile || '',
            bio: user?.bio || '',
            fullname: user?.fullname || '',
            portfolioUrl: user?.portfolioUrl || '',
            stackOverflowProfile: user?.stackOverflowProfile || ''
        }
    })


    // main function for profile update
    const { mutate: onProfileUpdate, isLoading } = useMutation({
        mutationKey: ['update-profile'],
        mutationFn: async (data: profileSchemaType) => {
            const res = await axios.patch('/api/profile/update', { ...data })
            return res?.data
        },
        onSuccess: () => {
            toast({
                description: 'Profile updated succefully.'
            }),
                router.refresh()
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                if (err?.response?.status === 409) {
                    return toast({
                        title: 'username already in use.',
                        description: 'Please choose another username.',
                        variant: 'destructive',
                    })
                }
            }
            return toast({
                title: 'Server Error',
                description: 'Please try again.',
                variant: 'destructive',
            })
        }
    })


    return (
        <Container>
            <div className="bg-white w-full h-fit p-8 rounded-lg border-[1.5px] border-zinc-200 mt-12">

                {/* profile form */}
                <form onSubmit={handleSubmit((e) => onProfileUpdate(e))}>

                    <div className="w-full md:grid-cols-2 grid gap-8 grid-cols-1 h-full">

                        {/* profile div 1 */}
                        <div className="w-full h-full flex flex-col gap-3">

                            <strong
                                className='font-semibold antialiased text-2xl'
                            >Basic Info</strong>

                            <Input
                                label="Full name"
                                placeholder='John doe'
                                id='fullname'
                                error={errors?.fullname?.message}
                                disabled={isLoading}
                                {...register('fullname')}
                            />

                            <Input
                                label="Username"
                                placeholder='John6234'
                                id='username'
                                error={errors?.username?.message}
                                disabled={isLoading}
                                {...register('username')}
                            />

                            <Input
                                label="Location"
                                placeholder='India, Usa'
                                id='location'
                                error={errors?.Location?.message}
                                disabled={isLoading}
                                {...register('Location')}
                            />


                            <Textarea
                                label="About (Profile bio)"
                                placeholder='write about your passion'
                                id='about'
                                error={errors?.bio?.message}
                                disabled={isLoading}
                                {...register('bio')}
                            />

                        </div>

                        {/* profile div 2 */}
                        <div className="w-full h-full flex flex-col gap-3">

                            <strong
                                className='font-semibold antialiased text-2xl'
                            >Social</strong>

                            <Input
                                label="Portfolio"
                                placeholder='https://johndoe.com'
                                id='portfolioUrl'
                                error={errors?.portfolioUrl?.message}
                                disabled={isLoading}
                                {...register('portfolioUrl')}
                            />

                            <Input
                                label="StackOverflow Profile"
                                placeholder='https://stackoverflow.com/users'
                                id='stackoverflow'
                                error={errors?.stackOverflowProfile?.message}
                                disabled={isLoading}
                                {...register('stackOverflowProfile')}
                            />

                            <Input
                                label="Github Profile"
                                placeholder='https://github.com/devnode'
                                id='github'
                                error={errors?.githubProfile?.message}
                                disabled={isLoading}
                                {...register('githubProfile')}
                            />

                            <Input
                                label="Linkedin URL"
                                placeholder='https://www.linkedin.com/in/johndoe'
                                id='linkedin'
                                error={errors?.LinkedinUrl?.message}
                                disabled={isLoading}
                                {...register('LinkedinUrl')}
                            />

                        </div>

                    </div>

                    {/* button div */}
                    <div className="flex w-full h-fit  justify-start gap-4 mt-8">

                        <Button
                            variant="default"
                            size="default"
                            className='bg-zinc-400 hover:bg-zinc-400/80 text-base rounded-full w-[8rem] text-white h-[3rem]'
                            type='button'
                            onClick={() => window.location.reload()}
                        >Cancel</Button>

                        <Button
                            variant="default"
                            size="default"
                            type='submit'
                            isLoading={isLoading}
                            className='bg-indigo-600 hover:bg-indigo-600/80 text-base rounded-full w-[8rem] text-white h-[3rem]'
                        >Update</Button>
                    </div>

                </form>
            </div>
        </Container>
    )
}
export default UpdatedProfile
