import { cn } from '@/utils/cn'
import React from 'react'

type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string
}

const NumberInput: React.FC<NumberInputProps> = ({
	type = 'number',
	name,
	label,
	disabled,
	...props
}) => {
	return (
		<div className="inline-block">
			<label
				htmlFor={name}
				className={cn('mr-2 block font-medium', disabled ? 'text-zinc-500' : 'text-zinc-700')}
			>
				{label}
			</label>
			<input
				name={name}
				type={type}
				disabled={disabled}
				className="mr-5 block h-10 w-32 rounded border border-zinc-400 px-2 disabled:bg-gray-200 disabled:text-zinc-500"
				{...props}
			/>
		</div>
	)
}

export { NumberInput }
