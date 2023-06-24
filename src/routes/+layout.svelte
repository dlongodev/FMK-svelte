<script>
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- Navigation Bar -->
		<Navigation />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
