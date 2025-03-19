
<!--title>Mert Akengin</title-->

<script async defer mode=eval >

async function loadLogo(elem) {
	return await fetch("https://ipv4.wtfismyip.com/json")
		.then(resp => resp.json())
		.then(json => {
			elem.innerHTML = `mert@${json.YourFuckingIPAddress}:~$ `
			return elem
		})
}

loadLogo(document.querySelector("code"))

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
