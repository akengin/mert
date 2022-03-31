
const pages = {
	"/blog": null,
	"/home": null,
	"/amazon": "/?/pages/work/amazon.md",
	"/fincompare": "/?/pages/work/fincompare.md",
}

window.onload = function() {
	if(window.location.pathname in pages) {
		let target = pages[window.location.pathname] || `/?${window.location.pathname}`
		window.location.href = target
	} else console.log("Not in the mapping:", window.location.pathname, pages)
	return
}

