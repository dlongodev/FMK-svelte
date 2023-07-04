<script lang="ts">
	import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerSettings: DrawerSettings = {
		id: 'cart-drawer',
		position: 'right',
		width: 'w-full sm:max-w-[540px]',
		blur: 'backdrop-blur-sm'
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
	const cart = {
		cartItems: [
			{
				title: 'Chicken Parmesan',
				quantity: 1,
				price: 60
			},
			{
				title: 'Chicken Francese',
				quantity: 1,
				price: 60
			}
		],
		totalQuantity: 2,
		total: 120
	};
</script>

<button on:click={drawerOpen} class="btn-icon variant-soft text-primary-500 ml-5 relative">
	<div
		class="absolute -top-1 -right-1 w-5 h-5 rounded-full p-1 flex items-center justify-center bg-white text-primary-500 font-semibold"
	>
		{cart.totalQuantity}
	</div>
	<i class="fa-solid fa-cart-shopping text-xl !m-0" />
</button>
