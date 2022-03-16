<script lang="ts">
	import github from '../../static/github.svg';
	import linkedin from '../../static/linkedin.svg';
	import SocialIcon from './SocialIcon.svelte';
</script>

<nav
	class="flex justify-center bg-primary lg:py-3 py-2 text-lg lg:border-b lg:border-[rgba(255,255,255,0.2)] w-screen"
>
	<div class="w-11/12 xl:w-full max-w-screen-xl flex items-center justify-between">
		<a href="#intro">Kion Kaimi</a>
		<div class="flex items-center gap-12">
			<div class="lg:flex gap-12 hidden text-[rgba(255,255,255,0.5)]">
				<a href="#skills" class="underline underline-offset-[18px] text-white cursor-pointer"
					>Skills</a
				>
				<a href="#projects" class="hover:underline underline-offset-[18px] cursor-pointer"
					>Projects</a
				>
				<a href="#contact" class="hover:underline underline-offset-[18px] cursor-pointer">
					Contact
				</a>
			</div>
			<div class="flex flex-row gap-6">
				<a href="https://github.com/akuamakana">
					<SocialIcon svg={github} label="github" />
				</a>
				<a href="https://linkedin.com/in/kion-kaimi">
					<SocialIcon svg={linkedin} label="linkedin" />
				</a>
			</div>
		</div>
	</div>
</nav>

<!-- TODO: Highlight link when clicked/element is on screen -->
