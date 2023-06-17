export function checkVisibility(element) {
	if (element) {
	  const isVisible = element.getBoundingClientRect().top < window.innerHeight;
	  console.log('Element is visible:', isVisible);
	}
}