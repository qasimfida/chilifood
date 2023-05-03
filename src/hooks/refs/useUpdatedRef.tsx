import { useRef, useEffect } from 'react'

export const useUpdatedRef = <T extends unknown>(val: T) => {
	const dataRef = useRef<T>(val)
	dataRef.current = val

	return dataRef
}
