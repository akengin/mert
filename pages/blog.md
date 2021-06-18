
<title>Mert's Blog</title>

<div id=blog-index class="loading column col-12" ></div>

<script>

async function blog() {
	return await fetch("https://notion-gw-jtojjrmgya-ez.a.run.app/v1/search", {
		method: "POST",
		data: JSON.stringify({
			page_size: 100,
			sort: {
				timestamp: "last_edited_time",
				direction: "descending",
			}
		})
	})
	.then(resp => resp.json())
	.then(json => json.results.map(obj => ({
		id: obj.id,
		link: `https://notion.so/${obj.id.split("-").join("")}`,
		archived: obj.archived,
		created: new Date(obj.created_time),
		updated: new Date(obj.last_edited_time),
		titles: obj.properties.title.title.map(t => t.plain_text),
		summary: obj.properties.title.title.map(t => t.text.content),
	})))
	.then(items => items.sort((x, y) => y.created.getTime() - x.created.getTime()))
	//.then(data => console.log(data))
}

blog().then(entries => entries.map(entry => (`
	<a href="${entry.link}" class="column d-block m-2" >
		<div class="tile tile-centered">
			<div class="tile-icon">
				<i class="icon icon-link centered"></i>
			</div>
			<div class="tile-content">
				<p class="tile-title">
					<small class="label">${entry.created.toLocaleString()}</small>
					<strong>${entry.titles.join(" ")}</strong>
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
`)).join("\n")).then(text => {
	document.querySelector("#blog-index").innerHTML = text
	document.querySelector("#blog-index").classList.remove("loading")
	return

})

</script>
