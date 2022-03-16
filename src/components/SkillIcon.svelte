<script lang="ts">
	export let svg: string;
	export let label: string;
</script>

<div class="flex flex-col items-center gap-2">
	<img src={svg} alt={label} class="h-[40px] lg:h-[80px]" />
	<p class="text-black">{label}</p>
</div>
