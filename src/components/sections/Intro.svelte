<script>
	import download from '../../../static/download.svg';
</script>

<div id="intro" class="flex flex-col gap-6">
	<h2 class="text-xl lg:text-3xl">Hey, how are you? I'm</h2>
	<h1 class="text-3xl lg:text-6xl font-bold">Kion Kaimi</h1>
	<h2 class="text-xl lg:text-3xl">Full stack developer</h2>
	<div class="flex gap-4">
		<a
			href="#projects"
			class="border-2 py-2 px-6 font-bold border-white rounded bg-white text-primary hover:bg-secondary hover:text-white"
			>View Work</a
		>

		<button
			class="border-2 py-2 px-6 font-bold border-white rounded flex gap-2 items-center hover:bg-secondary"
		>
			Download CV
			<img src={download} alt="download" width="18px" height="18px" />
		</button>
	</div>
</div>

<!-- TODO: Link resume for download -->
