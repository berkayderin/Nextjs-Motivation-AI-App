import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(
	process.env.NEXT_PUBLIC_GOOGLE_API_KEY
)

const getMotivationMessage = async () => {
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
	const prompt = `Sen bir motivasyon uzmanısın. Kısa ve etkili bir motivasyon mesajı yaz. Mesajı doğrudan kullanıcıya hitap ederek oluştur. Mesaj 3-4 cümleden oluşsun ve 300 karakteri geçmesin. Sadece motivasyon mesajını döndür, başka bir şey ekleme. Mesajın sonunda hedefe yönelik emoji kullan. Hedefe yönelik özel motivasyon mesajı yaz.`

	try {
		const result = await model.generateContent(prompt)
		let message = result.response.text()

		message = message.replace(/\[object Object\]/g, '')
		message = message.replace(/\[\[\w+\]\]/g, '')
		message = message.replace(/\s+/g, ' ')
		message = message.trim()

		return message
	} catch (error) {
		console.error('Motivasyon mesajı alınırken hata oluştu:', error)
		return `Bugün yeni fırsatlarla dolu. Her adımınızda potansiyelinizi keşfedin ve hedeflerinize odaklanın.`
	}
}

export { getMotivationMessage }
