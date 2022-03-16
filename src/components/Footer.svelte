<script lang="ts">
	import email from '../../static/email.svg';
	import linkedin from '../../static/linkedin.svg';
	import github from '../../static/github.svg';
	import SocialIcon from './SocialIcon.svelte';
</script>

<footer
	class="md:pt-12 p-4 md:p-0 flex flex-col gap-4 md:flex-row justify-center text-center md:justify-between items-center"
>
	<p>&#169; 2022 Kion Kaimi</p>
	<a href="mailto:kionkaimi@gmail.com" class="flex gap-2 hover:underline">
		<SocialIcon svg={email} label="email" />
		<p>kionkaimi@gmail.com</p>
	</a>
	<div class="flex gap-4">
		<a href="https://github.com/akuamakana">
			<SocialIcon svg={github} label="github" />
		</a>
		<a href="https://linkedin.com/in/kion-kaimi">
			<SocialIcon svg={linkedin} label="linkedin" />
		</a>
	</div>
</footer>
