<script lang="ts">
	import { AppBar, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import Navigation from './NavRoutes.svelte';
	import { page } from '$app/stores';
	import Logo from '$lib/assets/Logo.svelte';

	const drawerSettings: DrawerSettings = {
		id: 'responsive-nav',
		bgDrawer: 'bg-primary-500 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-primary-500/50 to-primary-500/50',
		width: 'w-[280px] md:w-[380px]',
		blur: 'backdrop-blur-sm'
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}

	// reactive variable to apply special styles to logo when switching route
	$: routeId = $page.route.id;
</script>

<nav class="w-[100%] bg-surface-400">
	<AppBar
		background="bg-surface-400"
		gridColumns="grid-cols-3 items-start"
		slotDefault="place-self-center"
		slotTrail="place-content-end"
		class="relative mx-auto max-w-7xl min-h-[6rem]"
	>
		<svelte:fragment slot="lead">
			<a href="/" class="hidden lg:block absolute top-0 left-2">
				<Logo className={`${routeId === '/' ? 'w-48' : 'w-24 ml-4 lg:static'} fill-token`} />
			</a>
			<button type="button" on:click={drawerOpen} class="lg:hidden btn-icon variant-filled-primary">
				<i class="fas fa-bars" />
			</button>
		</svelte:fragment>
		<a href="/" class="absolute lg:hidden -translate-y-1/4 -translate-x-1/2">
			<Logo className={`${routeId === '/' ? 'w-48 top-full ' : 'w-24 top-[45%]'} fill-token`} />
		</a>
		<svelte:fragment slot="trail">
			<div class="hidden lg:block">
				<Navigation />
			</div>
			<div class="hidden md:block px-8">
				<a class="font-semibold btn variant-ringed-primary text-primary-800" href="/menu">
					Place an Order
				</a>
			</div>
		</svelte:fragment>
	</AppBar>
</nav>
