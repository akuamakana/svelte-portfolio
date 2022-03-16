<form id="contact" class="text-black bg-white border-2 lg:p-16 p-4 rounded flex flex-col gap-6">
	<h1 class="text-xl font-bold">Contact me</h1>

	<div class="flex flex-col gap-3">
		<label for="name">Name</label>
		<input
			type="text"
			class="bg-transparent p-4 border-2 rounded"
			id="name"
			placeholder="Enter your name"
		/>
	</div>

	<div class="flex flex-col gap-3">
		<label for="email">Email</label>
		<input
			type="text"
			class="bg-transparent p-4 border-2 rounded"
			id="email"
			placeholder="Enter your email"
		/>
	</div>

	<div class="flex flex-col gap-3">
		<label for="message">Message</label>
		<textarea
			rows="5"
			class="bg-transparent p-4 border-2 rounded"
			id="message"
			placeholder="Enter your message"
		/>
	</div>

	<button
		type="submit"
		class="py-2 px-6 font-bold rounded bg-primary text-white self-end hover:bg-secondary"
		>Send</button
	>
</form>

<!-- TODO: Make form work... -->
<style>
	:global(.split-background) {
		background-color: white;
		background-image: -webkit-linear-gradient(white 40%, #27476e 40%);
	}
</style>
