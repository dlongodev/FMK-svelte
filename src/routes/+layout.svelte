<script lang="ts">
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import NavRoutes from '$lib/components/NavbarScenes/NavRoutes.svelte';
	import Navbar from '$lib/components/NavbarScenes/Navbar.svelte';
</script>

<Drawer>
	<NavRoutes />
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
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
