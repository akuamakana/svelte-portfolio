<script lang="ts">
	import ProjectCard from '../ProjectCard.svelte';
	import IntersectionObserver from '../IntersectionObserver.svelte';
	import { fly } from 'svelte/transition';
	import splat from '../../../static/splat.png';
</script>

<div class="flex flex-col gap-6">
	<p id="projects" class="text-xl font-bold text-black">Projects</p>

	<div class="md:flex md:flex-col">
		<IntersectionObserver top={-200} let:intersecting once>
			{#if intersecting}
				<div transition:fly class="gap-20 flex flex-col md:flex-row">
					<ProjectCard
						tags={['React', 'GraphQL']}
						title="Splat Ticketing System"
						description="Bug and ticket tracker created with React.js, Express, and MySQL"
						image={splat}
						codeLink="https://github.com/akuamakana/splat"
						liveLink="https://splatapi.com"
					/>
					<div>
						<div class="hidden lg:block lg:h-[100px]" />
						<ProjectCard
							tags={['React', 'GraphQL']}
							title="Workout Buddy"
							description="Bug and ticket tracker created with React.js, Express, and MySQL"
							image={splat}
							codeLink="https://github.com/akuamakana/splat"
							liveLink="https://splatapi.com"
						/>
					</div>
				</div>
			{/if}
		</IntersectionObserver>
		<IntersectionObserver top={-200} let:intersecting once>
			{#if intersecting}
				<div transition:fly class="gap-20 flex flex-col md:flex-row">
					<ProjectCard
						tags={['React', 'GraphQL']}
						title="Splat Ticketing System"
						description="Bug and ticket tracker created with React.js, Express, and MySQL"
						image={splat}
						codeLink="https://github.com/akuamakana/splat"
						liveLink="https://splatapi.com"
					/>
					<div>
						<div class="hidden lg:block lg:h-[100px]" />
						<ProjectCard
							tags={['React', 'GraphQL']}
							title="Splat Ticketing System"
							description="Bug and ticket tracker created with React.js, Express, and MySQL"
							image={splat}
							codeLink="https://github.com/akuamakana/splat"
							liveLink="https://splatapi.com"
						/>
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</div>
