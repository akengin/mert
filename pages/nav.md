
<!--title>Mert Akengin</title-->

<script async defer >
async function loadLogo(elem) {
	return await fetch("https://ipv4.wtfismyip.com/json")
		.then(resp => resp.json())
		.then(json => {
			elem.innerHTML = `root@${json.YourFuckingIPAddress}:~# `
			return elem
		})
}
loadLogo(document.querySelector("code"))
</script>

<div class="accordion-body">

- [Home](pages/home)
- [Blog](pages/blog)

</div>


<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Experience
	</summary>
	<div class="accordion-body">

- [Amazon](pages/work/amazon)
- [FinCompare](pages/work/fincompare)
- [iyzico](pages/work/iyzico)
- [IVEN](pages/work/iven)
- [TATU](pages/work/tatu)
- [Lostar](pages/work/lostar)

	</div>
</details>


<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Awards
	</summary>
	<div class="accordion-body">

- [Ericsson Innovation Awards](pages/awards/eia)
- [Hack-a-Sat CTF](pages/awards/sat)
- [STM CTF](pages/awards/stm)
- [Intel IoT Hackathon](pages/awards/intel)
- [TUBITAK Efficiency Challenge](pages/awards/tubitak)

	</div>
</details>


<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Projects
	</summary>
	<div class="accordion-body">

- [Android](pages/projects/android)
- [IoT & Embedded](pages/projects/iot)
- [Linux](pages/projects/linux)
- [Web](pages/projects/web)

	</div>
</details>

<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Activities
	</summary>
	<div class="accordion-body">

- [TEDxBahcesehir](pages/volunteer/tedx)
- [Abbox](pages/volunteer/abbox)
- [SparkGO](pages/volunteer/spark)

	</div>
</details>
