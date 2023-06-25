<script lang="ts">
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/fmk-nav/Navigation.svelte';
	import HomeNav from '$lib/components/fmk-nav/HomeNav.svelte';

	let isMobileNavigation: boolean = false;
	const mobilNavigation = () => (isMobileNavigation = true);
</script>

<Drawer>
	<Navigation {mobilNavigation} />
</Drawer>

<!-- App Shell -->
<AppShell>
	<!-- Navigation Bar -->
	<svelte:fragment slot="pageHeader">
		<HomeNav />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
