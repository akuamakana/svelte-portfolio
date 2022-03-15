<script>
	import download from '../../../static/download.svg';
</script>

<div id="intro" class="flex flex-col gap-6">
	<h2 class="text-xl lg:text-3xl">Kion Kaimi, Full stack developer</h2>
	<h1 class="text-3xl lg:text-6xl font-bold">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, earum.
	</h1>
	<div class="flex gap-4">
		<a
			href="#projects"
			class="border-2 py-2 px-6 font-bold border-white rounded bg-white text-blue-600 hover:bg-blue-700 hover:text-white"
			>View Work</a
		>
		<button
			class="border-2 py-2 px-6 font-bold border-white rounded flex gap-2 items-center hover:bg-blue-700"
		>
			Download CV
			<img src={download} alt="download" width="18px" height="18px" />
		</button>
	</div>
</div>

<!-- TODO: Link resume for download -->
