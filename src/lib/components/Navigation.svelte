<script>
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Logo from '$lib/components/Logo.svelte';
	import { browser } from '$app/environment';

	// export let data;
	let windowWidth = browser ? window.innerWidth : 0;
	let isActive = false;

	function handleResize() {
		windowWidth = window.innerWidth;
		if (windowWidth > 1280) {
			isActive = false;
		} 
	}
	const handleToggle = () => (isActive = !isActive);
	const resetToggle = () => (isActive = false);
</script>

<svelte:window on:resize={handleResize} />
<!-- App Bar -->
<AppBar
	background="bg-surface-backdrop-token"
	gridColumns="grid-cols-3 items-start"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="relative w-[100%]"
>
	<svelte:fragment slot="lead">
		{#if windowWidth > 1280}
			<Logo className="absolute top-2 left-2 w-48 fill-token -mt-3" />
		{:else}
			<button
				type="button"
				class="btn-icon variant-filled-primary"
				on:click={handleToggle}
				on:keydown={handleToggle}
			>
				<i class={isActive ? 'fa fa-times' : 'fas fa-bars'} />
			</button>
		{/if}
	</svelte:fragment>
	{#if windowWidth > 1280}
	<ul class="flex gap-5 uppercase text-lg">
		<li class="px-8">
			<a href="/about">About</a>
		</li>
		<li class="px-8">
			<a href="/menu">Menu</a>
		</li>
		<li class="px-8">
			<a href="/services">services</a>
		</li>
		<li class="px-8">
			<a href="/contact">contact</a>
		</li>
	</ul>
	{:else}
	<Logo className="absolute top-full -translate-y-1/2 -translate-x-1/2 w-48 fill-token" />
		{/if}
	<svelte:fragment slot="trail">
		<div class="hidden md:block px-8">
			<a class="font-semibold btn variant-filled-primary" href="/menu">Place an Order</a>
		</div>
	</svelte:fragment>
</AppBar>
