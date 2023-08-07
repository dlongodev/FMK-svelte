import { fail, type Actions, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const formDataSchema = zfd.formData({
			customer: zfd.text(
				z
					.string({ required_error: 'Please enter your name' })
					.min(2, { message: 'Name must be at least 2 characters long' })
					.trim()
			),
			email: zfd.text(
				z
					.string({ required_error: 'Email is required' })
					.email({ message: 'Must be a valid email address' })
					.trim()
					.toLowerCase()
			),
			phone: zfd.text(
				z
					.string({ required_error: 'Phone number is required' })
					.min(10, { message: 'Phone number must be at least 10 digits long' })
					.trim()
			),
			eventType: zfd.text(z.string().optional()),
			eventLocation: zfd.text(z.string().optional()),
			eventDate: zfd.text(z.string().optional()),
			guestCount: zfd.numeric(z.number().optional()),
			about: zfd.text(z.string().optional())
		});

		const result = formDataSchema.safeParse(formData);

		if (!result.success) {
			console.log(result.error.flatten());
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(400, data);
		}

		throw redirect(303, '/contact/thanks');
	}
};
