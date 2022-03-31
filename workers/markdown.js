
"use strict";


let useMarkdownit = function(e) {
	importScripts("../markdown-it/dist/markdown-it.min.js")
	return postMessage({
		target: e.data.target,
		html: markdownit({
			html: true,
			breaks: false,
			linkify: true,
			typographer: false,
		}).render(e.data.text),
	})
}

let useMarked = function(e) {
	importScripts("../marked/marked.min.js")
	return postMessage({
		target: e.data.target,
		html: marked(e.data.text, {
			smartLists: false,
			smartypants: false,
			headerPrefix: "",
			headerIds: true,
			baseUrl: "?/",
			silent: false,
			breaks: false,
			mangle: true,
			gfm: true,
		}),
	})
}

onmessage = function(e) {
	console.debug(arguments)
	return useMarked(e)
}
