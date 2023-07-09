<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ menu, categories } = data);
</script>

	<div class="bg-surface-300" >
		<section class="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-6 text-center">
			<h2 class="text-2xl md:text-3xl font-bold text-primary-500 text-center mb-2">
				Order by the Pan Menu
			</h2>
			<p class="leading-loose mb-2">
				Our pans are designed to serve 6 to 8 people, ensuring plentiful portions for everyone. For smaller gatherings, half pans are also available upon request. We offer complimentary delivery throughout Martin County, while deliveries to Palm Beach and St. Lucie Counties require a minimum order of $100. To ensure timely delivery, <span class="text-primary-500 italic font-semibold">we kindly request that orders be placed at least one day in advance</span>. Should you have any special requests or inquiries, please don't hesitate to reach out to us at <span class="font-semibold text-primary-500">754-264-6268</span>. 
			</p>
		</section>
		<img class="mx-auto min-w-[720px] overflow-hidden" src="/images/pans/pans-header.png" alt="" />
			<div class="bg-surface-100 shadow-top mx-auto max-w-7xl p-2">
				<div class="border border-primary-500 m-2">
					{#each categories as category}
					<section class="p-4">
						<h2 class="bg-primary-500 text-surface-50 p-4 text-center uppercase text-xl font-semibold">{category.title}</h2>
						{#each menu as item}
						{#if item.category === category.slug}
						<p>{item.title}</p>
						{/if}
						{/each}
					</section>
					{/each}
				</div>
		</div>
</div>

