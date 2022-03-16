<script lang="ts">
	import ProjectCard from '../ProjectCard.svelte';
	import IntersectionObserver from '../IntersectionObserver.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col gap-6">
	<p id="projects" class="text-xl font-bold text-black">Projects</p>
	<div class="md:flex md:flex-col">
		<IntersectionObserver top={-400} let:intersecting once>
			{#if intersecting}
				<div transition:fly class="gap-20 flex flex-col md:flex-row">
					<ProjectCard num={1} />
					<div>
						<div class="hidden lg:block lg:h-[100px]" />
						<ProjectCard num={2} />
					</div>
				</div>
			{/if}
		</IntersectionObserver>
		<IntersectionObserver top={-400} let:intersecting once>
			{#if intersecting}
				<div transition:fly class="gap-20 flex flex-col md:flex-row">
					<ProjectCard num={3} />
					<div>
						<div class="hidden lg:block lg:h-[100px]" />
						<ProjectCard num={4} />
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</div>
