<script lang="ts">
	import { AppBar, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import Logo from '../Assets/Logo.svelte';
	import Navigation from './NavRoutes.svelte';
	import { page } from '$app/stores';

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

<AppBar
	background="bg-surface-backdrop-token"
	gridColumns="grid-cols-3 items-start"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="relative w-[100%] min-h-[6rem]"
>
	<svelte:fragment slot="lead">
		<a href="/">
			<Logo
				className={`${
					routeId === '/' ? 'w-48' : 'w-24 ml-4 lg:static'
				} hidden lg:block absolute top-2 left-2 fill-token`}
			/>
		</a>
		<button type="button" on:click={drawerOpen} class="lg:hidden btn-icon variant-filled-primary">
			<i class="fas fa-bars" />
		</button>
	</svelte:fragment>
	<a href="/">
		<Logo
			className={`absolute  lg:hidden fill-token -translate-y-1/2 -translate-x-1/2 ${
				routeId === '/' ? 'w-48 top-full ' : 'w-24 top-[45%]'
			}`}
		/>
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
