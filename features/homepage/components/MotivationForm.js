import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle
} from '@/components/ui/glowing-stars'
import React, { useState } from 'react'

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import useMotivationMessage from '../queries/useMotivationMessage'

const MotivationForm = () => {
	const createMotivationMessage = useMotivationMessage()
	const [message, setMessage] = useState('')

	const onSubmit = async (value) => {
		if (value) {
			const result = await createMotivationMessage.mutateAsync(value)
			setMessage(result)
		}
	}

	const placeholders = [
		'Kilo vermek istiyorum',
		'Yeni bir dil öğrenmek istiyorum',
		'Kariyerimde yükselmek istiyorum',
		'Daha sağlıklı beslenmek istiyorum',
		'Kod yazmayı öğrenmek istiyorum',
		'Kitap okumaya başlamak istiyorum'
	]

	return (
		<GlowingStarsBackgroundCard className="mx-auto">
			<div className="space-y-4">
				<GlowingStarsTitle>Motivasyon AI</GlowingStarsTitle>
				<GlowingStarsDescription>
					Hedefini gir, sana özel bir motivasyon mesajı atalım!
				</GlowingStarsDescription>
				<PlaceholdersAndVanishInput
					placeholders={placeholders}
					onSubmit={onSubmit}
				/>
				{message && (
					<p className="text-white text-center mt-6 font-semibold text-sm">
						<span className="p-5">
							{message.charAt(0).toUpperCase() + message.slice(1)}
						</span>
					</p>
				)}
				{createMotivationMessage.isError && (
					<p className="text-sm text-red-500 text-center mt-4">
						Bir hata oluştu. Lütfen tekrar deneyin.
					</p>
				)}
			</div>
		</GlowingStarsBackgroundCard>
	)
}

export default MotivationForm
