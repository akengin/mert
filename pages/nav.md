
<!--title>Mert Akengin</title-->

<script async defer >
async function loadLogo(elem) {
	return await fetch("https://ipv4.wtfismyip.com/json")
		.then(resp => resp.json())
		.then(json => {
			elem.innerHTML = `mert@${json.YourFuckingIPAddress}:~$ `
			return elem
		})
}
loadLogo(document.querySelector("code"))
</script>

<div class="accordion-body">

- 🏠 [Home](home)
- 📝 [Blog](blog)
- 📷 [Photos](//unsplash.com/spacelatte)

</div>


<details class="accordion" open_ >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Experience
	</summary>
	<div class="accordion-body" data-load="../pages/work.md" onload="alert(e)" ></div>
</details>


<details class="accordion" open_ >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Awards
	</summary>
	<div class="accordion-body" data-load="../pages/awards.md" ></div>
</details>


<details class="accordion" open_ >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Projects
	</summary>
	<div class="accordion-body" data-load="../pages/projects.md" ></div>
</details>

<details class="accordion" open_ >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Activities
	</summary>
	<div class="accordion-body" data-load="../pages/volunteer.md" ></div>
</details>
