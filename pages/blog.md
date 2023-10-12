
<title>Mert's Blog</title>
<meta name="description" content="Mert's blog - index" />

<div id=blog-index class="loading column col-12" ></div>

<script async defer >

const apiUrl = "https://notion-gw-jtojjrmgya-ez.a.run.app"

async function blog(parameters, callback) {
	return await fetch(`${apiUrl}/v1/search`, {
		method: "POST",
		data: JSON.stringify({
			page_size: 100,
			...parameters,
		})
	})
	.then(resp => resp.json())
	.then(json => {
		let workspaces = json.results.filter(result => result.parent.type === "workspace")
		let pages      = json.results.filter(result => result.parent.type === "page_id")
		let blogws     = workspaces.filter(ws => ws?.properties?.title?.title[0]?.plain_text === `Mert's Blog`)
		return pages.filter(page => page?.parent?.page_id === blogws[0]?.id)
	})
	.then(pages => pages.map(page => ({
		id:   page?.id                                       || "no-id",
		link: page?.public_url                               || page.?.url || "no-url",
		icon: page?.icon?.emoji                              || `<i class="icon icon-link centered"></i>`,
		title: page?.properties?.title?.title[0]?.plain_text || "[wip] no-title specified",
		created: new Date(page.created_time                  || 0),
		updated: new Date(page.last_edited_time              || 0),
	})))
	.then(items => callback ? callback(items) : items)
}

blog({
	sort: {
		timestamp: "last_edited_time",
		direction: "descending",
	},
}, (items) => items
	.map(item => ({ ...item, content: item.title || item.titles.join(" ") }))
	.filter(item => item.content.search(/^(\[wip\])/ig))
	.sort((x, y) => y.created.getTime() - x.created.getTime())
).then(entries => entries.map(entry => (`
	<a href="${entry.link}" class="column d-block m-2" >
		<div class="tile tile-centered">
			<div class="tile-icon">${entry.icon}</div>
			<div class="tile-content">
				<p class="tile-title">
					<small class="label hide-sm">${entry.created.toLocaleString()}</small>
					<strong title="Title: ${entry.content}\nCreated: ${entry.created.toLocaleString()}" >${entry.content}</strong>
				</p>
				<!--p class="tile-subtitle text-gray">summary</p-->
			</div>
			<div class="tile-action">
				<button class="btn btn-secondary" >
					<i class="icon icon-link centered"></i>
				</button>
			</div>
		</div>
	</a>
`)).join("\n")).then(text => withSelf(document.querySelector("#blog-index"), function() {
	this.innerHTML = text
	this.classList.remove("loading")
	return
}))

</script>
