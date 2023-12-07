
"use strict";

/*
importScripts("../markdown-it/dist/markdown-it.min.js")
function useMarkdownit(e) {
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
async function useMarked(event) {
	if(!event.data.text) {
		return console.warn("useMarked: `data.text` property is required;", event)
	}
	return await postMessage({
		target: event.data.target,
		html: marked(event.data.text, {
			async: true,
			xhtml: true,
			sanitize: false,
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

//export function onmessage(event) {
//	console.debug("markdown.js/onmessage:", event, arguments)
//	return useMarked(event)
//}

//onmessage = function(event) {
//	console.debug("markdown.js/onmessage:", event, arguments)
//	return useMarked(event)
//}

onmessage = useMarked
