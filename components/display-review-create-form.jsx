'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const DisplayReviewCreateForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const defaultValues = { review: 5 };

	const [notification, setNotification] = useState('');

	const { executeRecaptcha } = useGoogleReCaptcha();

	const onSubmit = useCallback(
		async (data) => {
			if (!executeRecaptcha) {
				console.log('Could not get the reCAPTCHA token...');
				return;
			}

			try {
				/* get token from the reCAPTCHA servers */
				const gRecaptchaToken = await executeRecaptcha('ReviewCreateForm');

				console.log('The reCAPTCHA token: ', gRecaptchaToken);

				/* the reCAPTCHA token was not generated */
				if (!gRecaptchaToken) {
					return null;
				}

				const token = { gRecaptchaToken: gRecaptchaToken };

				/* submit inquiry + token to the back end */
				const submission = await fetch('/api/reviews', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ ...data, ...token }),
				});

				const response = await submission.json();

				console.log('The backend response: ', response);

				/* receive the notification message */
				if (response.status === 'success') {
					setNotification(response.message);

					/* redirect away if successful */
					setTimeout(() => {
						router.push('/projects/client-reviews');
					}, 4181);
				} else {
					setNotification(response.message);
				}
			} catch (error) {
				/* handle other errors */
				console.error(error);
			}
		},
		[executeRecaptcha, router]
	);

	return (
		<>
			{/* form start */}
			<div className="container mx-auto my-8 max-w-4xl rounded-lg border bg-highlight-alt p-5 shadow-lg">
				{/* form header start */}
				<h3 className="mb-3 border-b border-b-content-alt pb-3 text-lg font-semibold uppercase text-content-alt">
					Leave a Review
				</h3>
				{/* form header end */}

				<p className="my-5 w-full text-xs">
					Your email address and telephone number will not be published. All fields are
					required.
				</p>

				{/* form body start */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<label htmlFor="reviewerBusinessName">Business Name</label>
							<input
								type="text"
								{...register('reviewerBusinessName', {
									required: 'The name of your business name is required.',
								})}
								id="reviewerBusinessName"
								className="form-field"
							/>
							{errors.reviewerBusinessName && (
								<p className="text-xs text-error">
									{errors.reviewerBusinessName.message}
								</p>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<label htmlFor="reviewerName">Name</label>
							<input
								type="text"
								{...register('reviewerName', {
									required: 'Your name is required.',
								})}
								id="reviewerName"
								className="form-field"
							/>
							{errors.reviewerName && (
								<p className="text-xs text-error">{errors.reviewerName.message}</p>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<label htmlFor="reviewerEmail">Email Address</label>
							<input
								type="email"
								{...register('reviewerEmail', {
									required: 'Your email address is required.',
								})}
								id="reviewerEmail"
								className="form-field"
							/>
							{errors.reviewerEmail && (
								<p className="text-xs text-error">{errors.reviewerEmail.message}</p>
							)}
						</div>

						<div className="mb-3 flex-1">
							<label htmlFor="reviewerPhoneNumber">Phone Number</label>
							<input
								type="text"
								{...register('reviewerPhoneNumber')}
								id="reviewerPhoneNumber"
								className="form-field"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<label htmlFor="review">Review</label>
							<textarea
								{...register('review', {
									required: 'Your review is required.',
								})}
								id="review"
								rows={5}
								className="form-field"
							></textarea>
							{errors.review && (
								<p className="text-xs text-error">{errors.review.message}</p>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<label htmlFor="reviewRating">Review Rating</label>
							<input
								type="number"
								defaultValue={defaultValues.review}
								{...register('reviewRating', { valueAsNumber: true })}
								id="reviewRating"
								min="1"
								max="5"
								className="form-field"
							/>
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:gap-5">
						<div className="my-3 flex-1">
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									{...register('privacyPolicy', {
										required: 'Your acceptance of the privacy policy is required.',
									})}
									id="privacyPolicy"
									className="checkbox-field"
								/>
								<span className="ml-2 text-sm">
									I accept the{' '}
									<Link href="/legal/privacy-policy">
										<span className="text-accent underline">Privacy Policy</span>
									</Link>
								</span>
							</label>
							{errors.privacyPolicy && (
								<p className="text-xs text-error">{errors.privacyPolicy.message}</p>
							)}
						</div>
					</div>

					{/* submit button start */}
					<div className="mt-5">
						<button
							type="submit"
							className="w-full transform rounded-lg bg-accent px-5 py-2 font-semibold uppercase tracking-wide text-highlight-alt transition-colors duration-300 hover:bg-accent focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-80"
						>
							{isSubmitting ? 'Submitting Review' : 'Submit Review'}
						</button>
					</div>
					{/* submit button end */}

					<div className="mt-5">
						{/* notification text start */}
						{notification && (
							<p className="my-3 text-center font-semibold text-error">{notification}</p>
						)}
						{/* notification text end */}
					</div>
				</form>
				{/* form body end */}
			</div>
			{/* form end */}
		</>
	);
};

export default DisplayReviewCreateForm;
