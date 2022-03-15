<script lang="ts">
	export let color = 'bg-white';
	export let styleAfter = false;
	import curve from '../../static/curve.svg';
</script>

<div class="{color} flex justify-center py-16 lg:py-24 w-screen relative">
	<div class="w-11/12 xl:w-full max-w-screen-xl">
		<slot />
	</div>
</div>

{#if styleAfter}
	<img class="scale-y-[-1] w-full -mt-1" src={curve} alt="" />
{/if}
