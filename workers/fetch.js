
"use strict";

const simpleResponse = false

// reply: proxy function for postMessage, returns original argument back
async function reply(response) {
	let result = postMessage(response)
	if (result) return result
	return response
}

async function makeCache(key, callback, actual, ...args) {
	let cache = await caches.open("makengin/fetch/v0")
	if(! await cache.match(key)) {
		let result = await cache.add(key)
		console.debug("makeCache/match/add:", result)
	}
	return await callback(await actual(...args), ...args)
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

	return makeCache(file,
		async function (data, ...args) {
			console.debug("makeCache/callback:", data, args, arguments)
			return await reply(data)
		},
		async function (...args) {
			console.debug("makeCache/actual:", args, arguments)
			return (
				await fetch(file)
					.then(async response => ({
						resp: response,
						text: await response.text(),
					}))
					.then(async obj => ({
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
						//resp: structuredClone(obj.resp),
					}))
					.catch(async err => ({
						element: event.data.element,
						content: err.toString(),
					}))
			)
		},
		event.data,
	)
}
