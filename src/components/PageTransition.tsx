import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from '@tanstack/react-router'
import { ReactNode } from 'react'

const PageTransition = ({ children }: { children: ReactNode }) => {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 100 }}
				transition={{ duration: 0.3 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default PageTransition
