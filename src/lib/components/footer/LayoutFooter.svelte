<script>
	import Logo from '$lib/assets/Logo.svelte';
	const copyrightYear = new Date().getFullYear();

	const links = {
		contact: [
			{
				icon: 'fa-mobile-screen-button',
				text: '754-264-6268',
				link: 'tel:754-264-6268'
			},
			{
				icon: 'fa-envelope',
				text: 'chefjoe@familymealkitchen.com',
				link: 'mailto:chefjoe@familymealkitchen.com'
			},
			{
				icon: 'fa-location-dot',
				text: 'Hobe Sounch, Florida',
				link: 'https://g.page/r/CVlsYCjbXK1nEBM'
			}
		],
		social: [
			{
				icon: 'fa-facebook-f',
				text: 'Facebook',
				link: 'https://www.facebook.com/familymealkitchen'
			},
			{
				icon: 'fa-instagram',
				text: 'instagram',
				link: 'https://www.instagram.com/familymealkitchen/'
			},
			{
				icon: 'fa-google',
				text: 'Google',
				link: 'https://g.page/r/CVlsYCjbXK1nEBM/review'
			}
		]
	};
</script>

<div class="bg-primary-500 py-8">
	<div class="flex flex-col md:flex-row items-center justify-between mx-auto max-w-5xl">
		<div class="opacity-60">
			<Logo className="w-40 ml-4 fill-on-primary-token" />
		</div>
		<div class="my-2 w-full md:w-auto">
			<h3 class="text-xl text-primary-200 text-center md:text-left font-semibold mb-2">
				Contact Us
			</h3>
			<ul>
				{#each links.contact as { icon, text, link }}
					<li class="flex items-center justify-center md:justify-start text-primary-300 mb-1">
						<span class="w-4 text-center text-primary-50 mr-2"
							><i class={`fa-solid ${icon}`} /></span
						>
						<a href={link}> {text}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="my-2 w-full md:w-auto md:mr-8">
			<h3 class="text-xl text-primary-200 text-center md:text-left font-semibold mb-2">
				Follow us
			</h3>
			<ul>
				{#each links.social as { icon, text, link }}
					<li class="flex items-center justify-center md:justify-start text-primary-300 mb-1">
						<span class="w-4 text-center text-primary-50 mr-2"
							><i class={`fa-brands ${icon}`} /></span
						>
						<a href={link}> {text}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
<div class="bg-primary-700 py-8">
	<div
		class="flex flex-col gap-2 md:flex-row items-center justify-between mx-auto max-w-xl text-primary-300 text-xs uppercase"
	>
		<span>Copyright © {copyrightYear}</span>
		<span>Family Meal Kitchen, LLC</span>
		<span>All rights reserved.</span>
	</div>
</div>
