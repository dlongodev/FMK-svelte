<div class="max-w-5xl mx-auto px-5 sm:px-8 md:px-16 py-16">
	<h1 class="text-2xl md:text-3xl font-bold text-primary-500 text-center mb-6">About us</h1>
	<h2 class="text-2xl md:text-2xl mb-6 text-center">Meet Chef Joe Longo</h2>
	<div class="grid md:grid-cols-3 gap-8">
		<div class="md:col-span-1">
			<img
				class="m-1 rounded-md shadow-lg"
				src="/images/chef/Chef-Joe-Longo.jpg"
				alt="Chef Joe Longo Headshot"
			/>
		</div>
		<p class="md:col-span-2 md:ml-4 leading-loose mb-2">
			<span class="font-semibold text-primary-500"> “To be of service” </span>has been the lifelong
			mantra for Executive Chef Joseph Longo. This coupled with a tremendous work ethic, passion for
			one’s craft, and his never ending commitment to excellence has propelled Chef Longo’s 38 year
			career with an impressive resume leading some of the finest Private clubs, hotels, and
			restaurants in America. His award winning cuisine and upbeat personality has truly prepared
			him to bring this one of a kind dining experience to your home. The happily married father of
			4 believes that family comes first and to feed one's family has no greater reward hence Chef
			Joe has chosen the name
			<span class="font-semibold text-primary-500">Family Meal Kitchen, LLC</span> as his first privately
			owned catering business.
		</p>
		<div class="md:col-span-3 bg-surface-400 p-8 text-center text-balance">
			<a class="font-bold text-primary-500" href="/contact">Click here</a> to book an event or
			simply call <span class="font-semibold text-primary-500">754-264-6268 </span>to talk with Chef
			Joe!
		</div>
		<p class="md:col-span-3 leading-loose mb-2">
			Chef Joe will bring his years of experience creating unique and one of a kind dining
			experiences. Chef has been leading some of the finest country clubs, restaurants, and hotels
			in the country.
		</p>
	</div>
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 my-4">
		{#each [1, 2, 3, 4] as num}
			<img
				class="rounded-md shadow-md"
				src="/images/chef/chef-joe-longo_{num}.jpg"
				alt={`image ${num} of Chef Joe in action`}
			/>
		{/each}
	</div>
</div>
