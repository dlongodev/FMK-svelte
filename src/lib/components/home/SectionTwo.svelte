<script>
	const cardContent = [
		{
			title: 'Family Gatherings',
			image: '/images/services-chefs-table.jpg',
			description:
				"Make your family gatherings truly special with our pan size meals that cater to 6 to 8 people. From classic Chicken Parmesan to Mama's Meatballs, our dishes will leave everyone craving for more."
		},
		{
			title: 'Easy Meal Planning',
			image: '/images/services-deliveries.jpg',
			description:
				'Simplify your week with our family-sized pan meals, perfect for breaking apart and allowing you to effortlessly create customized meals throughout the week.'
		},
		{
			title: 'Business Events',
			image: '/images/services-catering.jpg',
			description:
				"Impress your clients and colleagues with the flavors of Family Meal Kitchen. Whether it's a corporate lunch or a team-building dinner, we'll ensure your event is a memorable success."
		}
	];
</script>

<section class="bg-primary-500 py-20 px-4 sm:px-8 md:px-16">
	<div class="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
		<!-- card -->
		{#each cardContent as { title, image, description }}
			<div class="card card-hover hover:bg-surface-300 py-2">
				<header class="card-header pb-4">
					<h3
						class="text-xl text-center font-semibold uppercase underline decoration-8 underline-offset-8 decoration-primary-500"
					>
						{title}
					</h3>
				</header>
				<section class="p-4">
					<img src={image} alt={title} />
				</section>
				<footer class="card-footer">
					<p>
						{description}
					</p>
				</footer>
			</div>
		{/each}
	</div>
</section>
