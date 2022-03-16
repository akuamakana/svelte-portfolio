<script lang="ts">
	import SkillIcon from '../SkillIcon.svelte';
	import react from '../../../static/react.svg';
	import svelte from '../../../static/svelte.svg';
	import express from '../../../static/express.svg';
	import graphql from '../../../static/graphql.svg';
	import typescript from '../../../static/typescript.svg';
	import postgresql from '../../../static/postgresql.svg';
	import jest from '../../../static/jest.svg';
	import cypress from '../../../static/cypress.svg';
	import python from '../../../static/python.svg';
	import git from '../../../static/git.svg';
	import docker from '../../../static/docker.svg';
	import tailwind from '../../../static/tailwind.svg';
</script>

<div class="flex flex-col gap-6">
	<p id="skills" class="text-black text-xl font-bold">Technologies I am skilled with</p>
	<div
		class="grid grid-flow-row grid-cols-4 grid-rows-3 lg:grid-rows-2 lg:grid-cols-6 gap-y-10 justify-items-center"
	>
		<SkillIcon svg={react} label="React" />
		<SkillIcon svg={svelte} label="Svelte" />
		<SkillIcon svg={express} label="Express" />
		<SkillIcon svg={graphql} label="Graphql" />
		<SkillIcon svg={typescript} label="Typescript" />
		<SkillIcon svg={postgresql} label="Postgresql" />
		<SkillIcon svg={jest} label="Jest" />
		<SkillIcon svg={cypress} label="Cypress" />
		<SkillIcon svg={python} label="Python" />
		<SkillIcon svg={git} label="Git" />
		<SkillIcon svg={docker} label="Docker" />
		<SkillIcon svg={tailwind} label="TailwindCSS" />
	</div>
	<p class="text-gray-500 text-right">and more!</p>
</div>
