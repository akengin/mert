
"use strict";

onmessage = function(e) {
	console.debug(arguments)
	fetch(e.data.file)
		.then(resp => resp.text())
		.then(text => postMessage({
			element: e.data.element,
			content: text,
		}))
		.catch(err => postMessage({
			element: e.data.element,
			content: err,
		}))
}
