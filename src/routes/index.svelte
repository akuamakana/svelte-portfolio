<script context="module" lang="ts">
	import Wrapper from '../components/Wrapper.svelte';
	import Intro from '../components/sections/Intro.svelte';
	import Skills from '../components/sections/Skills.svelte';
	import Projects from '../components/sections/Projects.svelte';
	import Contact from '../components/sections/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Kion Kaimi</title>
</svelte:head>

<Wrapper styleAfter color="bg-blue-600">
	<Intro />
</Wrapper>

<Wrapper>
	<Skills />
</Wrapper>

<Wrapper>
	<Projects />
</Wrapper>

<Wrapper color="split-background">
	<Contact />
	<Footer />
</Wrapper>
