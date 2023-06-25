<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<button type="button" on:click={drawerClose} class="lg:hidden btn-icon variant-filled-primary m-4">
	<i class="fas fa-times" />
</button>
<ul class="mt-20 lg:mt-0 z-[10] flex flex-col lg:flex-row uppercase text-lg">
	<li class="p-4 lg:p-0 hover:bg-primary-400 lg:hover:bg-transparent">
		<a
			class="px-8 pb-1 lg:hover:border-b-8 lg:hover:border-primary-500 lg:hover:transition-all"
			on:click={drawerClose}
			href="/about">About</a
		>
	</li>
	<li class="p-4 lg:p-0 hover:bg-primary-400 lg:hover:bg-transparent">
		<a
			class="px-8 pb-1 lg:hover:border-b-8 lg:hover:border-primary-500 lg:hover:transition-all"
			on:click={drawerClose}
			href="/menu">Menu</a
		>
	</li>
	<li class="p-4 lg:p-0 hover:bg-primary-400 lg:hover:bg-transparent">
		<a
			class="px-8 pb-1 lg:hover:border-b-8 lg:hover:border-primary-500 lg:hover:transition-all"
			on:click={drawerClose}
			href="/services">Services</a
		>
	</li>
	<li class="p-4 lg:p-0 hover:bg-primary-400 lg:hover:bg-transparent">
		<a
			class="px-8 pb-1 lg:hover:border-b-8 lg:hover:border-primary-500 lg:hover:transition-all"
			on:click={drawerClose}
			href="/contact">Contact</a
		>
	</li>
</ul>
<div class="lg:hidden mt-4 px-8">
	<a class="btn variant-ghost-surface text-surface-50 uppercase" href="/menu">Place an Order</a>
</div>
