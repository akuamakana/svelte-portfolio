<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<header class="sticky top-0 z-50">
	<Navbar />
</header>

<main>
	<slot />
</main>
