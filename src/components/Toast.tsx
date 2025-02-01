'use client'
import React from 'react'
import ReactDOM from 'react-dom'
import { useToastRegion, useToast, AriaToastRegionProps } from '@react-aria/toast'
import { useToastState, ToastState, QueuedToast } from '@react-stately/toast'
import { ToastQueue, useToastQueue } from '@react-stately/toast'
import { cn } from '@/utils/cn'
import { Button, IconButton } from '@radix-ui/themes'
import { Cross1Icon } from '@radix-ui/react-icons'

// based on https://react-spectrum.adobe.com/react-aria/useToast.html#usetoast

//  reduced motion setting for handling toast animation

const prefersReducedMotion = false
// const query = '(prefers-reduced-motion: reduce)'
// if (typeof window !== 'undefined' && 'matchMedia' in window) {
// 	prefersReducedMotion = window?.matchMedia(query).matches
// }

// LocalToastRegion is a wrapper with local state (toasts queue) that can be accessed from within

export type LocalToastRegionProps = {
	// TODO fix function type
	//eslint-disable-next-line
	children: Function
}

export type ToastPropsObjectType = {
	title?: string | React.ReactNode
	description?: string | React.ReactNode
	// TODO fix function type
	//eslint-disable-next-line
	onAction?: Function
	actionLabel?: string
	shouldCloseOnAction?: boolean
	variant?: 'default' | 'info' | 'success' | 'warning' | 'error'
}

export const LocalToastRegion = ({ children, ...props }: LocalToastRegionProps) => {
	const state = useToastState<ToastPropsObjectType>({
		maxVisibleToasts: 5,
		hasExitAnimation: !prefersReducedMotion,
	})

	return (
		<>
			{children(state)}
			{state.visibleToasts.length > 0 && <ToastRegion {...props} state={state} />}
		</>
	)
}

// ToastRegion

export type ToastStateType = ToastState<object>

export type ToastRegionProps = AriaToastRegionProps & {
	state: ToastStateType
}

const ToastRegion = ({ state, ...props }: ToastRegionProps) => {
	const ref = React.useRef(null)
	const { regionProps } = useToastRegion(props, state, ref)

	return (
		<div
			{...regionProps}
			ref={ref}
			aria-label="Notifications"
			className="fixed bottom-2 w-full z-[100]"
		>
			{state.visibleToasts.map((toast) => (
				<Toast key={toast.key} toast={toast} state={state} />
			))}
		</div>
	)
}

// Toast

export type ToastProps<ToastPropsObjectType> = React.HTMLAttributes<HTMLDivElement> & {
	state: ToastStateType
	toast: QueuedToast<ToastPropsObjectType>
}

const Toast = ({ state, ...props }: ToastProps<ToastPropsObjectType>) => {
	const ref = React.useRef(null)
	const { toastProps, titleProps, descriptionProps } = useToast(props, state, ref)
	const { title, description, onAction, actionLabel, shouldCloseOnAction } = props.toast.content
	const variant = props.toast.content.variant

	const toastStyles = cn([
		'w-fit mx-auto min-w-[260px] text-black bg-white border-2 border-violet-600 focusVisibleRingStyles',
		'group my-1 relative flex items-start overflow-hidden rounded-md py-4 px-8 shadow-lg transition-all',
		!prefersReducedMotion &&
			'data-[animation=entering]:animate-slide-bottom-up data-[animation=exiting]:animate-slide-bottom-out',
	])
	const dismissButtonStyles = cn(
		'absolute right-2 top-2 rounded text-gray-600 opacity-0 transition-opacity flex items-center justify-center p-0.5',
		'focus:opacity-100 focusVisibleRingStyles',
		'group-hover:opacity-100 hover:border-black hover:border group-focus:opacity-100'
	)

	const handleAction = () => {
		if (onAction) {
			onAction()
		}
		if (shouldCloseOnAction) {
			state.close(props.toast.key)
		}
	}

	return (
		<div
			{...toastProps}
			ref={ref}
			tabIndex={0}
			className={toastStyles}
			data-animation={props.toast.animation}
			data-variant={variant}
			onAnimationEnd={() => {
				if (props.toast.animation === 'exiting') {
					state.remove(props.toast.key)
				}
			}}
		>
			<div>
				{title && (
					<div {...titleProps} className="text-sm font-semibold mb-2">
						{title}
					</div>
				)}
				{description && <div {...descriptionProps}>{description}</div>}
				{onAction && actionLabel && (
					<Button size="1" variant="outline" onClick={handleAction}>
						{actionLabel}
					</Button>
				)}
				<IconButton
					onClick={() => state.close(props.toast.key)}
					aria-label="Dismiss"
					className={dismissButtonStyles}
				>
					<Cross1Icon />
				</IconButton>
			</div>
		</div>
	)
}

//  GlobalToastRegion (can live in main/layout, has one global queue)
// https://react-spectrum.adobe.com/react-aria/useToast.html#global-toast-queue

// global toast queue
const toastQueue = new ToastQueue({
	maxVisibleToasts: 5,
	hasExitAnimation: !prefersReducedMotion,
})

export type AddToastOptionsType = {
	priority?: number // 1 | 2 | 3 | 4 | 5
	timeout?: number // 5000 default
	disableTimeout?: boolean
}

//calculates timeout based on char count
function calculateToastTimeout(charCount: number) {
	const defaultTimeout = 5000
	const charsPerInterval = 120
	const additionalTimeoutPerInterval = 1000
	const additionalTimeout =
		Math.max(0, Math.ceil((charCount - charsPerInterval) / charsPerInterval)) *
		additionalTimeoutPerInterval
	return defaultTimeout + additionalTimeout
}

export const addToastToQueue = (
	toastContent: ToastPropsObjectType,
	options?: AddToastOptionsType
) => {
	const { title, description } = toastContent
	const charCount = (title?.toString().length || 0) + (description?.toString().length || 0)
	const minTimeoutBasedOnContentLength = calculateToastTimeout(charCount)

	let timeout
	if (toastContent.onAction || options?.disableTimeout) {
		timeout = undefined //no timeout if action or if disableTimeout is passed
	} else {
		// if no action, and no disableTimeout
		timeout = 5000 //default timeout is 5000
		if (options?.timeout) {
			//if timeout added, it should be longer than 5000, else fallback to 5000
			timeout = options?.timeout >= 5000 ? options?.timeout : 5000
		}
		// override timeout - ensure user has enough time to read content, based on character count
		if (minTimeoutBasedOnContentLength > timeout) {
			timeout = minTimeoutBasedOnContentLength
		}
	}

	toastQueue.add(toastContent, {
		priority: options?.priority,
		timeout: timeout,
	})
}

// @ts-expect-error TODO fix type
export const GlobalToastRegion = (props) => {
	const state = useToastQueue(toastQueue)

	return state.visibleToasts.length > 0
		? ReactDOM.createPortal(<ToastRegion {...props} state={state} />, document.body)
		: null
}
