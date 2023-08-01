"use client"
import { FC } from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

interface ProviderProp {
    children: React.ReactNode
}

const Providers: FC<ProviderProp> = ({ children }) => {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}
export default Providers
