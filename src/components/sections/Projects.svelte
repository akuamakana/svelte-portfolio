<script lang="ts">
	import ProjectCard from '../ProjectCard.svelte';
</script>

<div class="flex flex-col gap-6">
	<p id="projects" class="text-xl font-bold text-black">Projects</p>
	<div class="lg:flex gap-20">
		<div>
			<ProjectCard />
			<ProjectCard />
		</div>
		<div>
			<div class="hidden lg:block lg:h-[100px]" />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</div>
