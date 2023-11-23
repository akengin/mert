
<title>Mert Akengin</title>

**_BSc. Software Engineering_**

A passionate, curious and automation driven Software Engineer.

I strive to improve reliability, scalability and maintainability.

<script async defer >

const data = {
	experience: [
		{
			id: "amazon",
			company: "Amazon Europe SARL",
			title: "DevOps Engineer, Production Systems",
			dates: "November 2021 -- Current",
			place: "Luxembourg",
			link: "?/pages/work/amazon",
			action: "Details",
		},
		{
			id: "fincompare",
			company: "FinCompare GmbH",
			title: "Built cost-effective and modern infrastructure on AWS",
			dates: "October 2020 -- November 2021",
			place: "Berlin",
			link: "?/pages/work/fincompare",
			action: "Details",
		},
		{
			id: "iyzico",
			company: "iyzico Payment Systems",
			title: "Built a highly scalable infrastructure that's trusted by Amazon, Netflix, Aliexpress & more",
			dates: "August 2018 -- October 2020",
			place: "Istanbul",
			link: "?/pages/work/iyzico",
			action: "Details",
		},
		{
			id: "iven",
			company: "IVEN, IoT Cloud Solutions",
			title: "Built real-time IoT cloud systems for Turkey's leading appliance manufacturers",
			dates: "October 2016 -- September 2018",
			place: "Istanbul",
			link: "?/pages/work/iven",
			action: "Details",
		},
		{
			id: "tatu",
			company: "TATU Creative Studios",
			title: "Built high-performance GPU clusters and office infrastructure",
			dates: "August 2017 -- July 2018",
			place: "Istanbul",
			link: "?/pages/work/tatu",
			action: "Details",
		},
		{
			id: "lostar",
			company: "Lostar InfoSec",
			title: "Built a vulnerability detection and ticket management system",
			dates: "February 2016 -- August 2016",
			place: "Istanbul",
			link: "?/pages/work/lostar",
			action: "Details",
		},
	],
	awards: [
		{
			id: "eia2019",
			link: "?/pages/awards/eia",
			title: "Ericsson Innovation Awards",
			date: "December 2019",
			location: "Stockholm/Sweden",
			description: "Won global 4th place with our underwater communications solution: Diver's Mate",
			action: "Details",
		},
		/*
		<div class="timeline-item" id="hack-a-sat">
			<div class="timeline-left">
				<a class="timeline-icon icon-lg" href="?/pages/awards/sat">
					<i class="icon icon-check"></i>
				</a>
			</div>
			<div class="timeline-content">
				<a href="?/pages/awards/sat">Hack-A-Sat CTF</a>
			</div>
		</div>
		<div class="timeline-item" id="stm-ctf">
			<div class="timeline-left">
				<a class="timeline-icon icon-lg" href="?/pages/awards/stm">
					<i class="icon icon-check"></i>
				</a>
			</div>
			<div class="timeline-content">
				<a href="?/pages/awards/stm">STM CTF</a>
			</div>
		</div>
		<div class="timeline-item" id="intel">
			<div class="timeline-left">
				<a class="timeline-icon icon-lg" href="?/pages/awards/intel">
					<i class="icon icon-check"></i>
				</a>
			</div>
			<div class="timeline-content">
				<a href="?/pages/awards/intel">Intel IoT Hackathon</a>
			</div>
		</div>
		<div class="timeline-item" id="tubitak">
			<div class="timeline-left">
				<a class="timeline-icon icon-lg" href="?/pages/awards/tubitak">
					<i class="icon icon-check"></i>
				</a>
			</div>
			<div class="timeline-content">
				<a href="?/pages/awards/tubitak">TUBITAK Efficiency Challenge</a>
			</div>
		</div>
		*/
		{
			id: "hack-a-sat",
			link: "?/pages/awards/sat",
			title: "Hack-A-Sat CTF '20",
			date: "April 2020",
			location: "Online",
			description: "Ranked 25th percentile among participants",
			action: "Details",
		},
		{
			id: "stm-ctf",
			link: "?/pages/awards/stm",
			title: "STM CTF '17",
			date: "October 2017",
			location: "Ankara/Turkey",
			description: "Ranked 9th in the finals",
			action: "Details",
		},
		{
			id: "intel",
			link: "?/pages/awards/intel",
			title: "Intel IoT Hackathon",
			date: "September 2014 &amp; 2015",
			location: "Istanbul/Turkey",
			description: "Won Jury's innovation award with smart-home solutions",
			action: "Details",
		},
		{
			id: "tubitak",
			link: "?/pages/awards/tubitak",
			title: "TUBITAK Efficiency Challenge",
			date: "2014 &amp; 2015",
			location: "Izmit/Turkey",
			description: "Built an efficient electric-powered vehicles. Using batteries and hydrogen fuel cells",
			action: "Details",
		},
	],
	activities: [
		{
			id: "abbox",
			link: "?/pages/volunteer/abbox",
			title: "Abbox 3D Printing",
		},
		{
			id: "tedx",
			link: "?/pages/volunteer/tedx",
			title: "TEDxBahcesehir",
		},
		{
			id: "spark",
			link: "?/pages/volunteer/spark",
			title: "SparkGO",
		},
	]
}

document.querySelector("div#experience").innerHTML += (data.experience.map(item => (`
	<div class="timeline-item" id="${item.id}">
		<div class="timeline-left">
			<a class="timeline-icon icon-lg" href="${item.link}">
				<i class="icon icon-location"></i>
			</a>
		</div>
		<div class="timeline-content">
			<a href="${item.link}">${item.company}</a>
			<div class="tile">
				<div class="tile-content">
					<p class="tile-subtitle">${item.dates}, ${item.place}</p>
					<p class="tile-title">${item.title}</p>
				</div>
				<div class="tile-action">
					<a class="btn" href="${item.link}" >${item.action}</a>
				</div>
			</div>
		</div>
	</div>
`)).join("\n"))

document.querySelector("div#awards").innerHTML += (data.awards.map(item => (`
	<div class="timeline-item" id="${item.id}">
		<div class="timeline-left">
			<a class="timeline-icon icon-lg" href="${item.link}">
				<i class="icon icon-check"></i>
			</a>
		</div>
		<div class="timeline-content">
			<a href="${item.link}">${item.title}</a>
			<div class="tile">
				<div class="tile-content">
					<p class="tile-subtitle">${item.date}, ${item.location}</p>
					<p class="tile-title">${item.description}</p>
				</div>
				<div class="tile-action">
					<a class="btn" href="${item.link}" >${item.action}</a>
				</div>
			</div>
		</div>
	</div>
`)).join("\n"))

document.querySelector("div#activities").innerHTML += (data.activities.map(item => (`
	<div class="timeline-item" id="${item.id}">
		<div class="timeline-left">
			<a class="timeline-icon icon-lg" href="${item.link}">
				<i class="icon icon-flag"></i>
			</a>
		</div>
		<div class="timeline-content">
			<a href="${item.link}">${item.title}</a>
		</div>
	</div>
`)).join("\n"))


</script>

## experience

<div class="timeline" id=experience >
	<div class="timeline-item" id="today-experience">
		<div class="timeline-left">
			<a class="timeline-icon icon-md" href="#~experience"></a>
		</div>
		<div class="timeline-content">
			Today
		</div>
	</div>
</div>

<br />

## awards

<div class="timeline" id=awards >
	<div class="timeline-item" id="today-awards">
		<div class="timeline-left">
			<a class="timeline-icon icon-md" href="#~awards"></a>
		</div>
		<div class="timeline-content">
			Today
		</div>
	</div>
</div>

<br />

## activities

<div class="timeline" id=activities >
	<div class="timeline-item" id="today-activities">
		<div class="timeline-left">
			<a class="timeline-icon icon-md" href="#~activities"></a>
		</div>
		<div class="timeline-content">
			Today
		</div>
	</div>
</div>

<!--div class="timeline">
	<div class="timeline-item" id="timeline-example-1">
		<div class="timeline-left"><a class="timeline-icon tooltip" href="#timeline-example-1" data-tooltip="March 2016"></a></div>
		<div class="timeline-content">
			<div class="tile">
				<div class="tile-content">
					<p class="tile-subtitle">March 2016</p>
					<p class="tile-title">Initial commit</p>
				</div>
			</div>
		</div>
	</div>
	<div class="timeline-item" id="timeline-example-2">
		<div class="timeline-left"><a class="timeline-icon icon-lg tooltip" href="#timeline-example-2" data-tooltip="February 2017"><i class="icon icon-check"></i></a></div>
		<div class="timeline-content">
			<div class="tile">
				<div class="tile-content">
					<p class="tile-subtitle">February 2017</p>
					<p class="tile-title">New Documents experience</p>
					<p class="tile-title"><a href="components.html#bars">Bars</a>: represent the progress of a task</p>
					<p class="tile-title"><a href="components.html#steps">Steps</a>: progress indicators of a sequence of task steps</p>
					<p class="tile-title"><a href="components.html#tiles">Tiles</a>: repeatable or embeddable information blocks</p>
				</div>
				<div class="tile-action">
					<button class="btn">View</button>
				</div>
			</div>
		</div>
	</div>
	<div class="timeline-item" id="timeline-example-3">
		<div class="timeline-left"><a class="timeline-icon icon-lg tooltip" href="#timeline-example-3" data-tooltip="March 2017"><i class="icon icon-check"></i></a></div>
		<div class="timeline-content">
			<div class="tile">
				<div class="tile-content">
					<p class="tile-subtitle">March 2017</p>
					<p class="tile-title"><a href="elements.html#icons">Icons</a>: single-element, responsive and pure CSS icons</p>
					<p class="tile-title"><a href="components.html#popovers">Popovers</a>: small overlay content containers</p>
					<p class="tile-title"><a href="experimentals.html#calendars">Calendars</a>: date or date range picker and events display</p>
					<p class="tile-title"><a href="experimentals.html#carousels">Carousels</a>: slideshows for cycling images</p>
				</div>
				<div class="tile-action">
					<button class="btn">View</button>
				</div>
			</div>
		</div>
	</div>
</div-->

<!--
<br />![](https://akveo.github.io/eva-icons/outline/svg/link-2-outline.svg)   Web: [mert.akeng.in](https://mert.akeng.in)
<br />![](https://akveo.github.io/eva-icons/outline/svg/edit-outline.svg)     Blog: [blog.n0pe.me](https://blog.n0pe.me)
<br />![](https://akveo.github.io/eva-icons/outline/svg/email-outline.svg)    Mail: [mert@akeng.in](mailto:mert@akeng.in)
<br />![](https://akveo.github.io/eva-icons/outline/svg/phone-outline.svg)    Phone: [+90 539 605 4246](tel:905396054246)
<br />![](https://akveo.github.io/eva-icons/outline/svg/linkedin-outline.svg) LinkedIn: [linkedin.com/in/mert-akengin-1640b887](https://www.linkedin.com/in/mert-akengin-1640b887)
<br />![](https://akveo.github.io/eva-icons/outline/svg/layers-outline.svg)   **DockerHub**: [hub.docker.com/u/pvtmert](https://hub.docker.com/u/pvtmert)
<br />![](https://akveo.github.io/eva-icons/outline/svg/github-outline.svg)   **GitHub**: [github.com/spacelatte](https://github.com/spacelatte)
<br /><br />
-->
<!-- <br /> ![](https://akveo.github.io/eva-icons/outline/svg/twitter-outline.svg)  Twitter: [twitter.com/spacelatte](https://twitter.com/spacelatte) -->
<!-- <br /> / (lots of scripts in [gist.github.com/spacelatte](https://gist.github.com/spacelatte)) -->
<!--
**Languages**: Bash, Python, C, Make, Javascript, HTML/CSS, Android (Kotlin/Java)<br />
**Tools**: Git, Docker, Ansible, Splunk, Kafka, Zabbix, Prometheus, VMWare ESXi,<br />
Nginx, MySQL, PostgreSQL, Kuberntes, Bitbucket, Bamboo, Heroku, Elasticsearch<br />
**Frameworks/Libs**: Flask, ExpressJS, Firebase, OpenCV, AWS/Lambda, FalconPy,<br />
Arduino, ESP-IDF, DJango, Boto3/AWS, Spring-Boot, PySerial, CherryPy, NodeJS<br />
**Integrations**: NWjs, Slack API, Telegram, IRC, DigitalOcean API, Cloudflare API<br />
-->


<!--div style="page-break-after:always;" ></div-->

<!--div style="page-break-after:always;" ></div-->


<br />
<br />

# contact

<div
	class="calendly-inline-widget"
	data-url="https://calendly.com/mert-akengin?hide_landing_page_details=1&hide_gdpr_banner=1"
	style="min-width:320px;height:1280px;"
	></div>
<script async defer src="https://assets.calendly.com/assets/external/widget.js" ></script>
