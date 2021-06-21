
<title>Mert's Blog</title>

<div id=blog-index class="loading column col-12" ></div>

<script>

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
	.then(json => json.results.filter(result => result.parent.workspace))
	.then(wslist => wslist
		.map(async ws => await fetch(`${apiUrl}/v1/blocks/${ws.id}/children?page_size=100`)
			.then(resp => resp.json())
			.then(json => json.results)
		)
	)
	.then(blocklists => Promise.all(blocklists))
	.then(blocks => blocks.flat()
		.filter(result => result.type == "child_page")
		.map(page => ({
			id: page.id,
			link: `https://notion.so/${page.id.split("-").join("")}`,
			title: page.child_page.title,
			created: new Date(page.created_time),
			updated: new Date(page.last_edited_time),
		}))
	)
	.then(items => callback ? callback(items) : items)
	//.then(data => console.log(data))
}

blog({
	sort: {
		timestamp: "last_edited_time",
		direction: "descending",
	},
}, (items) => items
	.map(item => ({ ...item, content: item.title || item.titles.join(" ") }))
	.filter(item => item.content.search(/\[wip\]/ig))
	.sort((x, y) => y.created.getTime() - x.created.getTime())
).then(entries => entries.map(entry => (`
	<a href="${entry.link}" class="column d-block m-2" >
		<div class="tile tile-centered">
			<div class="tile-icon">
				<i class="icon icon-link centered"></i>
			</div>
			<div class="tile-content">
				<p class="tile-title">
					<small class="label">${entry.created.toLocaleString()}</small>
					<strong>${entry.content}</strong>
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
