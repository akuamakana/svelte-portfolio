<script lang="ts">
	import email from '../../static/email.svg';
	import linkedin from '../../static/linkedin.svg';
	import github from '../../static/github.svg';
</script>

<footer
	class="md:pt-12 p-4 md:p-0 flex flex-col md:flex-row justify-center text-center md:justify-between items-center"
>
	<p>&#169; 2022 Kion Kaimi</p>
	<a href="mailto:kionkaimi@gmail.com" class="flex gap-2 hover:underline">
		<img src={email} alt="email" width="20" height="20" />
		<p>kionkaimi@gmail.com</p>
	</a>
	<div class="flex">
		<a class="hover:bg-blue-800 p-2 rounded-full" href="https://linkedin.com/in/kion-kaimi">
			<img src={linkedin} alt="linkedin" width="20" height="20" />
		</a>
		<a class="hover:bg-blue-800 p-2 rounded-full" href="https://github.com">
			<img src={github} alt="github" width="20" height="20" />
		</a>
	</div>
</footer>
