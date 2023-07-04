<script lang="ts">
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import NavRoutes from '$lib/components/navbar/NavRoutes.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import LayoutFooter from '$lib/components/footer/LayoutFooter.svelte';
	import Seo from '$lib/components/home/Seo.svelte';
	import CartDrawer from '$lib/components/cart/CartDrawer.svelte';
</script>

<Seo />

<Drawer>
	{#if $drawerStore.id === 'responsive-nav'}
		<NavRoutes />
	{:else}
		<CartDrawer />
	{/if}
</Drawer>
<!-- App Shell -->
<AppShell>
	<!-- Navigation Bar -->
	<svelte:fragment slot="pageHeader">
		<Navbar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter"><LayoutFooter /></svelte:fragment>
</AppShell>
<div class="noise-overlay" />

<style>
	.noise-overlay {
		background-image: url('/images/noisy-texture.png');
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 5000;
		width: 100%;
		height: 100%;
		background-repeat: repeat;
		background-position: 0 0;
		background-size: 250px 250px;
		opacity: 0.4;
		pointer-events: none;
	}
</style>
