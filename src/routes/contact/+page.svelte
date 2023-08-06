<script lang="ts">
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
				<div class="mx-auto grid max-w-xl grid-cols-4 gap-4">
					<!-- fields -->
					<label class="label col-span-4">
						<span class="ml-2">Full Name</span>
						<input class="input" name="customer" type="text" />
					</label>
					<label class="label col-span-4">
						<span class="ml-2">Email</span>
						<input class="input" name="email" type="text" />
					</label>
					<label class="label col-span-4 md:col-span-3">
						<span class="ml-2">Phone Number</span>
						<input class="input" name="phone" type="text" />
					</label>
					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Event Location</span>
						<input
							class="input"
							name="eventLocation"
							type="text"
							placeholder="Venue name or city, state"
						/>
					</label>
					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Event Type</span>
						<select class="select" name="eventType" placeholder="Select Option">
							<option value="Wedding">Corporate</option>
							<option value="Wedding">Private</option>
							<option value="Wedding">Wedding</option>
							<option value="Wedding">Other</option>
						</select>
					</label>
					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Event Date</span>
						<input class="input" name="eventDate" type="date" />
					</label>
					<label class="label col-span-4 md:col-span-2">
						<span class="ml-2">Approximate guest count</span>
						<input class="input" name="guestCount" type="number" />
					</label>
					<label class="label col-span-4">
						<span class="ml-2">Tell us about your event</span>
						<textarea
							class="input"
							name="about"
							rows="5"
							placeholder="Any special details you would like to share about your event"
						/>
					</label>
				</div>
			</section>
		</div>
	</div>
</div>
