<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
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

<section class="h-full flex flex-col justify-between">
	<div class="p-4 flex items-center justify-between bg-primary-500 text-white">
		<h1 class="text-xl">Cart Summary</h1>
		<button type="button" on:click={drawerClose} class="btn-icon variant-filled-primary">
			<i class="fas fa-times" />
		</button>
	</div>
	<div class="h-full p-4">
		<ul class="divide-y divide-primary-200">
			{#each cart.cartItems as item}
				<li class="flex flex-col py-4 mb-4">
					<div class="flex justify-between items-center">
						<h2 class="font-semibold">{item.title}</h2>
						<button
							aria-label="Remove item"
							title="Remove item"
							class="btn-icon variant-soft-error"
						>
							<i class="fa-regular fa-trash-can fa-lg" /></button
						>
					</div>
					<div class="flex">
						<div class="mt-1 w-full">
							<span class="text-xs text-tertiary-400">Quantity</span>
							<div class="flex justify-between items-center">
								<div
									class="flex items-center justify-between w-full max-w-[160px] h-14 px-2 border border-primary-300 bg-surface-50"
								>
									<button
										class="btn-icon btn-icon-sm variant-soft-success"
										aria-label="Decrement quantity"
										title="Decrement quantity"
									>
										<i class="fa-solid fa-minus" />
									</button>
									<span>{item.quantity}</span>
									<button
										class="btn-icon btn-icon-sm variant-soft-success"
										aria-label="Increment quantity"
										title="Increment quantity"
									>
										<i class="fa-solid fa-plus" />
									</button>
								</div>
								<div>${(item.price * item.quantity).toFixed(2)}</div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="grid grid-cols-1 p-4 gap-4">
		<div class="flex items-center justify-between">
			<span class="text-lg">Total:</span>
			<span class="text-lg">${cart.total.toFixed(2)}</span>
		</div>
		<button class="btn variant-filled-primary"
			><span>Checkout</span><span><i class="fa-solid fa-arrow-right" /></span>
		</button>
		<a class="text-center underline underline-offset-4 text-primary-500 font-semibold" href="/cart"
			>View detailed cart</a
		>
	</div>
</section>
