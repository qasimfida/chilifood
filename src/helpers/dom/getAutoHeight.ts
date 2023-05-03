export const getAutoHeight = (el: HTMLElement) => {
	const initialStyleHeight = el.style.height
	el.style.height = 'auto'
	const autoHeight = el.clientHeight
	el.style.height = initialStyleHeight
	return autoHeight
}
