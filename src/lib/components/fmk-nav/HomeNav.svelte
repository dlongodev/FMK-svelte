<script lang="ts">
	import { AppBar, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import Logo from '../assets/Logo.svelte';
	import Navigation from './Navigation.svelte';

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
</script>

<AppBar
	background="bg-surface-backdrop-token"
	gridColumns="grid-cols-3 items-start"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="relative w-[100%]"
>
	<svelte:fragment slot="lead">
		<Logo className="hidden lg:block absolute top-2 left-2 w-48 fill-token -mt-3" />
		<button type="button" on:click={drawerOpen} class="lg:hidden btn-icon variant-filled-primary">
			<i class="fas fa-bars" />
		</button>
	</svelte:fragment>
	<Logo className="lg:hidden absolute top-full -translate-y-1/2 -translate-x-1/2 w-48 fill-token" />
	<svelte:fragment slot="trail">
		<div class="hidden lg:block">
			<Navigation />
		</div>
		<div class="hidden md:block px-8">
			<a class="font-semibold btn variant-ringed-primary text-primary-800" href="/menu"
				>Place an Order</a
			>
		</div>
	</svelte:fragment>
</AppBar>
