import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(
	process.env.NEXT_PUBLIC_GOOGLE_API_KEY
)

const getMotivationMessage = async (goal) => {
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
	const prompt = `Sen bir motivasyon uzmanısın. Kullanıcının hedefi "${goal}". Bu hedef doğrultusunda kısa ve etkili bir motivasyon mesajı yaz. Mesajı doğrudan kullanıcıya hitap ederek oluştur. Hedefi tam olarak belirttiğim şekilde kullan. Yer tutucu veya genel ifadeler kullanma. Mesajın 2-3 cümleden oluşsun ve 200 karakteri geçmesin. Sadece motivasyon mesajını döndür, başka bir şey ekleme.`

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
		return `${goal} hedefine odaklan ve asla pes etme. Her zorluk seni hedefe bir adım daha yaklaştırır.`
	}
}

export { getMotivationMessage }
