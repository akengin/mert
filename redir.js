
const pages = {
	"/blog": null,
	"/home": null,
	"/amazon": "/?/pages/work/amazon.md",
	"/fincompare": "/?/pages/work/fincompare.md",
}

window.onload = function() {
	if (window.location.pathname in pages) {
		window.location.href = pages[window.location.pathname]
	} else {
		console.warn("Not in the mapping:", window.location.pathname, pages)
		console.info("Using default redirect...")
		window.location.href = `/?${window.location.pathname}`
	}
	return
}
