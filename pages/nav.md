
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

- [Home](pages/home.md)
- [Blog](pages/blog.md)

</div>


<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Experience
	</summary>
	<div class="accordion-body">

- [Amazon](pages/work/amazon.md)
- [FinCompare](pages/work/fincompare.md)
- [iyzico](pages/work/iyzico.md)
- [IVEN](pages/work/iven.md)
- [TATU](pages/work/tatu.md)
- [Lostar](pages/work/lostar.md)

	</div>
</details>


<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Awards
	</summary>
	<div class="accordion-body">

- [Ericsson Innovation Awards](pages/awards/eia.md)
- [Hack-a-Sat CTF](pages/awards/sat.md)
- [STM CTF](pages/awards/stm.md)
- [Intel IoT Hackathon](pages/awards/intel.md)
- [TUBITAK Efficiency Challenge](pages/awards/tubitak.md)

	</div>
</details>


<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Projects
	</summary>
	<div class="accordion-body">

- [Android](pages/projects/android.md)
- [IoT & Embedded](pages/projects/iot.md)
- [Linux](pages/projects/linux.md)
- [Web](pages/projects/web.md)

	</div>
</details>

<details class="accordion" open >
	<summary class="accordion-header">
		<i class="icon icon-arrow-right mr-1"></i>
		Activities
	</summary>
	<div class="accordion-body">

- [TEDxBahcesehir](pages/volunteer/tedx.md)
- [Abbox](pages/volunteer/abbox.md)
- [SparkGO](pages/volunteer/spark.md)

	</div>
</details>
