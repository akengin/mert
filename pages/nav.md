
<!--title>Mert Akengin</title-->

<script async defer mode=eval >

async function fetchIpAddr() {
	return await fetch("https://ipv4.wtfismyip.com/json")
		.then(resp => resp.json())
		.then(json => `mert@${json.YourFuckingIPAddress}:~$ `)
}
	
async function loadLogo(elem) {
	let line = null;
	const cache = JSON.parse(window.localStorage["logo"] || `null`)
	if(cache && cache.last && Date.now() <= Date.parse(cache.last) + 86400000) {
		line = cache.line
	} else {
		line = await fetchIpAddr()
		window.localStorage["logo"] = JSON.stringify({
			line: line,
			last: new Date().toISOString(),
		})
	}
	elem.innerHTML = line;
	return elem;
}

loadLogo(document.querySelector("code"))
//document.querySelector("a[href*=blog]")

async function elementUnderline(query) {
	return Array.from(document.querySelectorAll(query))
		.filter(link => link.href.endsWith(window.location.search))
		.forEach(link => {
			// link.style.textDecoration = "underline"
			link.classList.add("selected")
			return link
		})
}

async function elementToggleOpenByPath(element, path) {
	if (window.location.search.match(path)) {
		element.open = element?.open ? false : true;
		elementUnderline(`a[href*="${path}"]`);
	}
	return
}

</script>

<div class="accordion-body">

- 🏠 [Home](home)
- 📝 [Blog](blog)
- 📷 [Photos](//unsplash.com/spacelatte)

</div>


<details class="accordion" >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		💼 Experience
	</summary>
	<div class="accordion-body" data-load="../pages/work.md" onload="elementToggleOpenByPath(this.parentElement, `/work/`)" ></div>
</details>


<details class="accordion" >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		🏆 Awards
	</summary>
	<div class="accordion-body" data-load="../pages/awards.md" onload="elementToggleOpenByPath(this.parentElement, `/awards/`)" ></div>
</details>


<details class="accordion" >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		🧰 Projects
	</summary>
	<div class="accordion-body" data-load="../pages/projects.md" onload="elementToggleOpenByPath(this.parentElement, `/projects/`)" ></div>
</details>

<details class="accordion" >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		🧸 Activities
	</summary>
	<div class="accordion-body" data-load="../pages/volunteer.md" onload="elementToggleOpenByPath(this.parentElement, `/volunteer/`)" ></div>
</details>


<div style="opacity:0.0001" >
	<img width=0 height=0 src="https://notion.run.gcp.cloud.mert.akeng.in/v1" loading=lazy fetchpriority=low />
</div>
