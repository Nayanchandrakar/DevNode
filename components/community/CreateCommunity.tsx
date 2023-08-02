"use client"
import Input from '@components/global/input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { communitySchema } from '@schema/zodSchema'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@components/ui/Button'
import axios, { AxiosError } from 'axios'
import { useToast } from '@hooks/use-toast'
import { useRouter } from 'next/navigation'


interface CreateCommunityProps {

}

const CreateCommunity: FC<CreateCommunityProps> = ({ }) => {

    const { toast } = useToast()
    const router = useRouter()

    type communitySchemaType = z.infer<typeof communitySchema>
    const { register, formState: { errors }, handleSubmit } = useForm<communitySchemaType>({ resolver: zodResolver(communitySchema) })

    const { mutate: createProfile, isLoading } = useMutation({
        mutationFn: async (data: communitySchemaType) => {
            const response = await axios?.post('/api/community/create', { ...data })
            return response?.data
        },
        mutationKey: ['create-community'],
        onSuccess: () => {
            toast({
                description: "Community Created Succefully ✨",
            })
            router?.refresh()
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                if (err?.response?.status === 409) {
                    return toast({
                        title: 'Subdomain and communityName already in use.',
                        description: 'Please choose another subdomain or community name.',
                        variant: 'destructive',
                    })
                } else if (err?.response?.status === 401) {
                    return toast({
                        title: 'Please Sign-in first',
                        description: 'Unauthorized user',
                        variant: "destructive",
                        action: <Button variant="destructive" >Sign-in</Button>
                    })
                } else if (err?.response?.status === 400) {
                    return toast({
                        title: 'please fill all fields',
                        description: 'All the fields are necessary',
                        variant: 'destructive'
                    })
                }

                return toast({
                    title: 'Server Error',
                    description: 'Please try again.',
                    variant: 'destructive',
                })

            }
        }
    })
    return (
        <section className='flex justify-center '>
            <div className="w-[45rem] flex flex-col justify-center p-8 h-fit mx-6 mt-8 rounded-xl border-[1.5px] border-zinc-300">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(e => createProfile(e))}>
                    <div className="flex flex-col gap-2">
                        <span className='text-xl font-semibold antialiased bg-clip-text text-transparent bg-gradient'>Create your Community ✨</span>
                        <p className='text-zinc-600 '>🤘 Let's git init your Hashnode journey</p>
                    </div>

                    <Input
                        label="Sub-domain"
                        placeholder='Enter your sub-domain'
                        id='subdomain'
                        error={errors?.subDomain?.message}
                        disabled={isLoading}
                        {...register('subDomain')}
                    />

                    <Input
                        label="Community Name"
                        placeholder='Enter your Community Name'
                        id='CommunityName'
                        error={errors?.communityName?.message}
                        disabled={isLoading}
                        {...register('communityName')}
                    />

                    <div className="flex flex-col gap-2">
                        <p className='text-sm italic'>By continuing to the next step, you agree to Devnode <strong className='text-blue-400'>privacy policy</strong> and <strong className='text-blue-400'>terms of use.</strong></p>

                        <Button
                            className='mt-3 bg-indigo-600  hover:bg-indigo-600/90'
                            variant="default"
                            type='submit'
                            isLoading={isLoading}
                        >Create Community</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateCommunity