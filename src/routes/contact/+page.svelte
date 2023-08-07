<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<div class="h-full bg-surface-300">
	<section class="mx-auto max-w-4xl px-4 py-6 text-center sm:px-8 md:px-16">
		<h2 class="mb-2 text-center text-2xl font-bold text-primary-500 md:text-3xl">Contact Us</h2>
		<p class="mb-2 leading-loose">
			We’d love to hear from you! Family Meal Kitchen is here to answer any questions that you may
			have or to begin planning your next event. Please contact us using the form below for
			catering, private events, or any general inquiries. Feel free to give us a call at <span
				class="font-semibold text-primary-500">754-264-6268</span
			>
			or email at
			<a href="mailto:chefjoe@familymealkitchen.com" class="font-semibold text-primary-500"
				>chefjoe@familymealkitchen.com</a
			>
		</p>
	</section>
	<div class="shadow-top mx-auto mb-4 max-w-4xl bg-surface-100 p-2">
		<div class="m-2 border border-primary-300">
			<section class="p-4">
				<h2
					class="mb-8 bg-primary-500 p-4 text-center text-xl font-semibold uppercase text-surface-50"
				>
					Request a Quote or More Information
				</h2>
				<form method="POST" class="mx-auto grid max-w-xl grid-cols-4 gap-4" use:enhance>
					<div class=" col-span-4">
						<label class="label flex flex-col">
							<span class="ml-2">Full Name *</span>
							<input
								class={form?.errors?.customer ? 'input-error' : 'input'}
								name="customer"
								type="text"
								value={form?.data?.customer ?? ''}
							/>
						</label>
						{#if form?.errors?.customer}
							<p class="ml-2 text-xs italic text-error-500">{form?.errors?.customer[0]}</p>
						{/if}
					</div>
					<div class="col-span-4">
						<label class="label flex flex-col">
							<span class="ml-2">Email *</span>
							<input
								class={form?.errors?.email ? 'input-error' : 'input'}
								name="email"
								type="text"
								value={form?.data?.email ?? ''}
							/>
						</label>
						{#if form?.errors?.email}
							<p class="ml-2 text-xs italic text-error-600">
								{form?.errors?.email[0]}
							</p>
						{/if}
					</div>
					<div class="col-span-4 md:col-span-3">
						<label class="label flex flex-col" for="phone">
							<span class="ml-2">Phone Number *</span>
							<input
								class={form?.errors?.phone ? 'input-error' : 'input'}
								name="phone"
								type="tel"
								value={form?.data?.phone ?? ''}
							/>
						</label>
						{#if form?.errors?.phone}
							<p class="ml-2 text-xs italic text-error-600">
								{form?.errors?.phone[0]}
							</p>
						{/if}
					</div>
					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Event Location</span>
						<input
							class="input"
							name="eventLocation"
							type="text"
							placeholder="Venue name or city, state"
							value={form?.data?.eventLocation ?? ''}
						/>
					</label>

					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Event Type</span>
						<input
							class="select"
							name="eventType"
							placeholder="Birthday, Dinner Party..."
							value={form?.data?.eventType ?? ''}
						/>
					</label>

					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Event Date</span>
						<input class="input" name="eventDate" type="date" value={form?.data?.eventDate ?? ''} />
					</label>

					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Approximate Guest Count</span>
						<input
							class="input"
							name="guestCount"
							type="number"
							value={form?.data?.guestCount ?? ''}
						/>
					</label>

					<label class="label col-span-4">
						<span class="ml-2">Tell us about your event</span>
						<textarea
							class="input"
							name="about"
							rows="5"
							placeholder="Any special details you would like to share about your event"
							>{form?.data?.about ?? ''}</textarea
						>
					</label>

					<button type="submit" class="btn variant-filled-primary col-span-4 mb-4 font-semibold">
						<span>Send Message</span>
						<span><i class="fa-solid fa-paper-plane" /></span>
					</button>
				</form>
			</section>
		</div>
	</div>
</div>
