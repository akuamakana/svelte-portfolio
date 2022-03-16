<script lang="ts">
	export let tags: string[];
	export let image: string;
	export let title: string;
	export let description: string;
	export let liveLink: string = '';
	export let codeLink: string = '';
</script>

<div class="flex flex-col text-black pb-36">
	<img class="rounded" src={image} alt={`${title} screenshot`} />

	<div class="flex gap-5 text-gray-400 py-4">
		{#each tags as tag}
			<p>#{tag}</p>
		{/each}
	</div>
	<div class="flex gap-4 flex-col">
		<h1 class="text-2xl font-bold">{title}</h1>
		<p>
			{description}
		</p>
		<div class="flex gap-4">
			{#if codeLink}
				<a class="text-blue-600 font-bold hover:underline underline-offset-8" href={codeLink}
					>View Source {'</>'}</a
				>
			{/if}
			{#if liveLink}
				<a class="text-blue-600 font-bold hover:underline underline-offset-8" href={liveLink}
					>View Live &#10142;</a
				>
			{/if}
		</div>
	</div>
</div>

<style>
	.radial-gradient {
		background: white;
		background: radial-gradient(circle, rgba(193, 0, 0, 1) 0%, rgba(121, 9, 9, 1) 69%);
	}
</style>
