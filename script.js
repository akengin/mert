
"use strict";

let _scroll = {

	load: function (storage) {
		let data = JSON.parse(storage.getItem("scroll") || "[0,0]")
		return window.scrollTo(data[0], data[1])
	},

	save: function (storage) {
		let data = JSON.stringify([ window.scrollX, window.scrollY, ])
		return storage.setItem("scroll", data)
	},

}


function withSelf(self, callback) {
	return callback.call(self)
}

function makeWorker(script, callback) {

	if ("Worker" in window && window.Worker) {
		let worker = new Worker(script)
		if(callback) callback.selfWorker = worker
		worker.onmessage = callback
		return worker
	}

	return null
}
function developerMode(hostname) {

	let storage = window.sessionStorage

	if (window.location.hostname === hostname) {
		// window.location.href.replace(/^http/, "ws")
		let ws = new WebSocket(`ws://${window.location.host}/`)

		async function reconnect(event) {
			console.debug("developerMode/reconnect:", arguments)
			await new Promise(p => setTimeout(p, 999))
			if (event.type === "close") {
				developerMode(hostname)
			}
			return
		}

		ws.onclose = reconnect
		ws.onmessage = async function () {
			console.debug("developerMode/hostname/WebSocket:", arguments, _scroll.save())
			return window.location.reload(true)
		}
	}
	return
}
function loadDocument(worker, extension = null) {

	const directory = "/pages/"

	let target = window.location.search.substring(1)

	if (!target) {
		target = directory
	}

	if (!target.startsWith(directory)) {
		target = `${directory}${target}`
	}

	if (target.endsWith("/")) {
		target += "home"
	}

	target = target.replace(/[/]+/g, "/")

	let breadcrumbs = document.querySelector("ul.breadcrumb#path")
	if (breadcrumbs) {
		breadcrumbs.innerHTML = (
			`<li class="breadcrumb-item"></li>\n`
			+ target.split("/").slice(2).filter(path => path).map(
				(path, index, paths) => (`
					<li class="breadcrumb-item">
						<a class="chip" href="?${paths.slice(0, index + 1).join("/")}" >
							${index+1 == paths.length ? "<span id=title >" + path + "</span>" : path}
						</a>
					</li>
				`)
		).join("\n")
		)
	}

	_currentPage = target

	return worker.loader.postMessage({
		extension: extension,
		element: "main#content",
		file: target,
	})
}

function onHashChange(event) {

	if(event) event.preventDefault()

	let absolute = true
	let offsetMultiplier = 1.1

	if (window.location.hash.substring(1)) {

		let docRect = document.body.getBoundingClientRect()
		let section = document.querySelector(window.location.hash.replace("~", ""))
		let titleRect = document.querySelector("#title").getBoundingClientRect()

		if (section && section instanceof HTMLHeadingElement) {

			let secRect = section.getBoundingClientRect()

			console.log(
				"scroll:", window.scrollY,
				"section", secRect.top,
				"doc:", docRect.top,
				"event:", event,
			)

			if (absolute) {
				window.scrollTo({
					top: secRect.top - titleRect.height * offsetMultiplier - docRect.top,
					left: 0,
					behavior: "smooth",
				})
			} else {
				window.scrollBy({
					top: secRect.top - titleRect.height * offsetMultiplier,
					left: 0,
					behavior: "smooth",
				})
			}
		}
		// if(section) section.scrollIntoView({
		// 	behavior: "smooth",
		// 	inline: "start",
		// 	block: "start",
		// })
	} else _scroll.load(sessionStorage);

	return false
}

async function loadSectionAsync(element, loader) {
	return element.querySelectorAll("[data-load]").forEach(async function(e, i) {

		console.debug("element.querySelectorAll/[data-load]/forEach/callback:", e, i, arguments)

		e.dataset.identity = "dl-" + (
			self.crypto.randomUUID().replaceAll("", "")
			||
			Array(32).fill(0).map(x => Math.random().toString(36).charAt(2)).join("")
		)

		e.classList.add("loading")

		if (loader) {
			return loader.postMessage({
				extension: null,
				element: `[data-identity="${e.dataset.identity}"]`,
				file: e.dataset.load,
			})
		} else {
			return await fetch(e.dataset.load)
				.then(resp => resp.text())
				.then(html => {
					e.innerHTML = html
					e.classList.remove("loading")
					if (e?.onload) {
						e.onload(e)
					}
				})
		}
	})
}

function onLoad(event) {

	console.debug("onLoad:", arguments)

	try {
		developerMode("localhost");
	} catch(e) {
		console.log("DevModeError", e)
	}

	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./workers/service.js")
			.then(result => console.debug("onLoad/serviceWorker/result:", result))
			.catch(error => console.error("onLoad/serviceWorker/error:",  error))
	}

	let parser = makeWorker("./workers/markdown.js", function(e) {
		console.debug("parser/makeWorker/markdown.js:", arguments)
		let element = e.data.target
		if(typeof(element) === "string")
			element = document.querySelector(element)
		element.innerHTML = e.data.html
		let title = element.querySelector("title")
		if(title && title.innerText) {
			document.querySelector("h3.s-title#title").innerHTML = title.innerHTML
			document.querySelector("ul.breadcrumb#path #title").innerHTML = title.innerHTML
			document.title = `${title.innerText} | Mert Akengin`
		}
		element.classList.remove("loading")
		//window.location.hash = `id--${window.location.hash.substring(1)}`
		//window.location.hash = ""
		element.querySelectorAll("script").forEach(script => {
			if(script.src) {
				fetch(script.src)
					.then(source => source.text())
					.then(text => new Function(text).call(window))
					.catch(console.error)
			}
			if(script.text) {
				new Function(script.text).call(window)
			}
			window.mrt = script
			return console.log(script)
		})

		if (loader)
			loadSectionAsync(element, loader)
		else
			loadSectionAsync(element, null)

		onHashChange(null)
		return
	})

	let loader = makeWorker("./workers/fetch.js", function (event) {

		try {
			console.debug("loader/makeWorker/fetch.js:", arguments)
		} catch (error) {
			console.warn("loader/makeWorker/fetch.js:", error)
		}
		const data = event.data
		const extensions = [".md", ".htm", ".html", ".txt", ".json", ".js",]
		const extension = (event.data?.extension || extensions[0])
		const nextExtensionIndex = extensions.indexOf(extension) + 1
		const nextExtension = extensions[nextExtensionIndex]

		if (true
			&& data.http
			&& !data.http.ok
			&& !data.file.endsWith(extension)
			&& !data.file.endsWith(nextExtension)
			&& nextExtensionIndex < extensions.length
		) {
			console.debug("loader/makeWorker/fetch.js/callback:", "Trying next extension", data, nextExtension)
			return this.postMessage({
				extension: nextExtension,
				element: data.element,
				file: data.file,
			})
		} else return parser.postMessage({
			target: data.element,
			text: data.content,
		})
	})

	loadSectionAsync(document, loader)

	/*
	window.md = makeWorker("./workers/markdown.js", function (e) {
		console.debug("window.md/makeWorker/callback:", e, arguments, this, self)
		let element = e.data.target
		if(typeof(element) === "string")
			element = document.querySelector(element)
		console.debug("element", element)
		element.innerHTML = e.data.html
		})
	*/

	window.md = parser

	return loadDocument({
		parser,
		loader,
	}, ".md")
}

window.addEventListener("load", onLoad, true)
window.addEventListener("hashchange", onHashChange, {
	capture: true,
	once: false,
	passive: false,
})

onLoad(null)
