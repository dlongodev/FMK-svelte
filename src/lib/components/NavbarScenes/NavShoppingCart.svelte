<script lang="ts">
	import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerSettings: DrawerSettings = {
		id: 'cart-drawer',
		position: 'right',
		// bgBackdrop: 'bg-gradient-to-tr from-primary-500/50 to-primary-500/50',
		width: 'w-[280px] md:w-[380px]',
		blur: 'backdrop-blur-sm'
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
</script>

<button on:click={drawerOpen} class="btn-icon variant-soft text-primary-500 ml-5 relative">
	<div
		class="absolute -top-1 -right-1 w-5 h-5 rounded-full p-1 flex items-center justify-center bg-white text-primary-500 font-semibold"
	>
		0
	</div>
	<i class="fa-solid fa-cart-shopping text-xl !m-0" />
</button>
