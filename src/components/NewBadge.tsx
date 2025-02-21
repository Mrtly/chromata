import { cn } from '@/utils/cn'
import { Badge } from '@radix-ui/themes'

export const NewBadge = ({ className }: { className?: string }) => {
	const styles = cn(className, 'pr-1 bg-violet-500 text-white font-gummy')

	return (
		<Badge highContrast={false} size="3" radius="full" variant="solid" className={styles}>
			new ✨
		</Badge>
	)
}
