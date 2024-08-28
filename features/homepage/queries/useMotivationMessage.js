import { getMotivationMessage } from '../services/motivation'
import { useMutation } from '@tanstack/react-query'

const useMotivationMessage = () => {
	return useMutation({
		mutationFn: async (goal) => await getMotivationMessage(goal)
	})
}

export default useMotivationMessage
