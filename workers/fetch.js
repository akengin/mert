
"use strict";

const simpleResponse = false

// reply: proxy function for postMessage, returns original argument back
async function reply(response) {
	let result = postMessage(response)
	if (result) return result
	return response
}

onmessage = async function (event) {

	try {
		console.debug("fetch.js/onmessage:", arguments)
	} catch (error) {
		console.warn("fetch.js/onmessage:", error)
	}

	const extension = event.data?.extension
	const element = event.data.element

	let file = event.data.file

	if (file.endsWith("/")) {
		file = `${event.data.file}/index`
	}

	if (extension && !file.endsWith(extension)) {
		file += extension
	}

	if (simpleResponse) return await reply({
		extension: extension,
		element: element,
		content: (await (await fetch(file)).text()),
		file: event.data.file, // pass original
	})

	return console.log("bok:",
			await fetch(file)
				.then(async response => ({
					resp: response,
					text: await response.text(),
				}))
				.then(async obj => await reply({
					extension: extension,
					element: element,
					content: obj.text,
					file: event.data.file, // pass original
					http: {
						//headers: obj.resp.headers,
						bodyUsed: obj.resp.bodyUsed,
						ok: obj.resp.ok,
						redirected: obj.resp.redirected,
						status: obj.resp.status,
						statusText: obj.resp.statusText,
						type: obj.resp.type,
						url: obj.resp.url,
					},
				}))
				.catch(async err => await reply({
					element: event.data.element,
					content: err,
				}))
		)
}
