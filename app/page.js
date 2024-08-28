'use client'

import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'

import MotivationForm from '@/features/homepage/components/MotivationForm'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { WavyBackground } from '@/components/ui/wavy-background'

const queryClient = new QueryClient()

const Homepage = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<WavyBackground
				className="w-full h-full"
				colors={['#272727', '#435ea4', '#ffffff']}
				blur={5}
				speed="fast"
				waveOpacity={0.7}
			>
				<div className="flex items-center justify-center min-h-screen">
					<MotivationForm />
				</div>
			</WavyBackground>
		</QueryClientProvider>
	)
}

export default Homepage
