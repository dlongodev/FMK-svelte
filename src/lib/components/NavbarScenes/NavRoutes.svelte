<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	const navLinks = [
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Menu',
			href: '/menu'
		},
		{
			title: 'Services',
			href: '/services'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<button type="button" on:click={drawerClose} class="lg:hidden btn-icon variant-filled-primary m-4">
	<i class="fas fa-times" />
</button>
<ul class="mt-20 lg:mt-0 z-[10] flex flex-col lg:flex-row uppercase text-lg">
	{#each navLinks as { title, href }}
		<li class="p-4 lg:p-0 hover:bg-primary-400 lg:hover:bg-transparent">
			<a
				class="px-8 pb-1 lg:hover:border-b-8 lg:hover:border-primary-500 lg:hover:transition-all"
				on:click={drawerClose}
				{href}>{title}</a
			>
		</li>
	{/each}
</ul>
<div class="lg:hidden mt-4 px-8">
	<a class="btn variant-ghost-surface text-surface-50 uppercase" href="/menu">Place an Order</a>
</div>
