<div id="hero" class="bg-surface-backdrop-token pt-24 xl:pt-16">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
			<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
				<h1 class="font-bold !text-4xl md:!text-6xl max-w-[600px]">
					Family Style Italian American Cooking
				</h1>
				<p class="font-light !text-xl max-w-[475px]">
					Discover the vibrant and authentic tastes of Italian-American cuisine with Chef Joe's
					expertly crafted pan size meals.
				</p>
				<div class="flex gap-4">
					<a href="/menu" class="font-semibold btn variant-filled-primary"
						><span>Place an Order</span> <i class="fa-solid fa-arrow-right-long" />
					</a>
				</div>
			</div>
			<div
				class="md:inline-block w-full max-w-[960px] xl:max-w-[650px] h-32 xl:h-auto mx-auto mt-20 relative"
			>
				<div class="aspect-video flex xl:block xl:static xl:rotate-[-12deg]">
					<div class="z-[1] xl:absolute xl:left-1 xl:top-[32%]">
						<img class="w-72" src="/images/pans/pan_chicken-parm.png" alt="food photos" />
					</div>
					<div class="z-[1] xl:absolute xl:-left-6 xl:-top-[60%] xl:rotate-90">
						<img class="w-72" src="/images/pans/pan_chicken-francese.png" alt="food photos" />
					</div>
					<div class="z-[1] xl:absolute xl:right-6 xl:-top-[50%]">
						<img class="w-72" src="/images/pans/pan_caesar-salad.png" alt="food photos" />
					</div>
					<div class="hidden md:block z-[1] xl:absolute xl:-right-1 xl:top-[42%] xl:rotate-90">
						<img class="w-72" src="/images/pans/pan_wings-balsamico.png" alt="food photos" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes floating {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}
	.anim-float-element1 {
		animation: floating 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	/* border-2 border-rose-500 */
</style>
