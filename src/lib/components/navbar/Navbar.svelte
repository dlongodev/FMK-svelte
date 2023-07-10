<script lang="ts">
	import { AppBar, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import Navigation from './NavRoutes.svelte';
	import { page } from '$app/stores';
	import Logo from '$lib/assets/Logo.svelte';
	import NavShoppingCart from './NavShoppingCart.svelte';

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
	$: logoSize = $page.url.pathname;
</script>

<nav class={`${logoSize !== '/' && 'shadow-lg'} w-[100%] bg-surface-400`}>
	<AppBar
		background="bg-surface-400"
		gridColumns="grid-cols-3 items-start h-16"
		slotDefault="place-self-center"
		slotTrail="place-content-end"
		class="relative mx-auto max-w-7xl"
	>
		<svelte:fragment slot="lead">
			<a href="/" class="absolute left-2 top-0 hidden lg:block">
				<Logo className={`${logoSize === '/' ? 'w-48' : 'w-24 ml-4 lg:static'} fill-token`} />
			</a>
			<button type="button" on:click={drawerOpen} class="btn-icon variant-filled-primary lg:hidden">
				<i class="fas fa-bars" />
			</button>
		</svelte:fragment>
		<a href="/" class="absolute -translate-x-1/2 lg:hidden">
			<Logo className={`${logoSize === '/' ? 'w-48 top-full -translate-y-1/4 ' : 'w-24 -translate-y-1/2'} fill-token`} />
		</a>
		<svelte:fragment slot="trail">
			<div class="hidden lg:block">
				<Navigation />
			</div>
			<div class="flex items-center pl-8">
				<a
					class="btn variant-ghost-surface hidden border-2 border-primary-700 font-semibold text-primary-800 md:block"
					href="/menu"
				>
					Place an Order
				</a>
				<NavShoppingCart />
			</div>
		</svelte:fragment>
	</AppBar>
</nav>
