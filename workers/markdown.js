
"use strict";

/*
importScripts("../markdown-it/dist/markdown-it.min.js")
let useMarkdownit = function(e) {
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
*/

importScripts("../marked/marked.min.js")
let useMarked = function(event) {
	if(!event.data.text) {
		return console.warn("useMarked: `data.text` property is required;", event)
	}
	return postMessage({
		target: event.data.target,
		html: marked(event.data.text, {
			smartLists: true,
			smartypants: true,
			headerPrefix: "",
			headerIds: true,
			baseUrl: "?/",
			silent: false,
			breaks: true,
			mangle: true,
			gfm: true,
		}),
	})
}

onmessage = function(e) {
	console.debug(arguments)
	return useMarked(e)
}
