type Color = {
	name: { value: string }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any // allow for other properties to exist on the object
}

export function deduplicateByName(arr: Color[]): Color[] {
	const unique: Color[] = []

	for (const item of arr) {
		const isDuplicate = unique.find((obj) => obj.name.value === item.name.value)
		if (!isDuplicate) {
			unique.push(item)
		}
	}

	return unique
}
