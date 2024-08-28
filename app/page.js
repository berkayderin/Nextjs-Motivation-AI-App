'use client'

import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'

import MotivationForm from '@/features/homepage/components/MotivationForm'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const Homepage = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<MotivationForm />
			</div>
		</QueryClientProvider>
	)
}

export default Homepage
