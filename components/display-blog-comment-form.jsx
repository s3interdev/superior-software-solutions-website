'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const DisplayBlogCommentForm = ({ slug }) => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const [notification, setNotification] = useState('');

	const { executeRecaptcha } = useGoogleReCaptcha();

	const onSubmit = useCallback(
		async (data) => {
			if (!executeRecaptcha) {
				console.log('Could not get the reCAPTCHA token...');
				return null;
			}

			try {
				/* get token from the reCAPTCHA servers */
				const gRecaptchaToken = await executeRecaptcha('BlogCommentForm');

				console.log('The reCAPTCHA token: ', gRecaptchaToken);

				/* the reCAPTCHA token was not generated */
				if (!gRecaptchaToken) {
					return null;
				}

				const token = { gRecaptchaToken: gRecaptchaToken };
				const blog = { slug: slug };

				/* submit comment + slug + token to the backend */
				const submission = await fetch('/api/comments', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ ...data, ...blog, ...token }),
				});

				const response = await submission.json();

				console.log('The backend response: ', response);

				/* receive the notification message */
				if (response.status === 'success') {
					setNotification(response.message);

					/* redirect away if successful */
					setTimeout(() => {
						router.push('/blogs');
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
			<div className="container mx-auto my-8 rounded-lg border bg-highlight-alt p-5 shadow-lg">
				{/* form header start */}
				<h3 className="mb-3 border-b border-b-content-alt pb-3 text-lg font-semibold uppercase text-content-alt">
					Leave a Comment
				</h3>
				{/* form header end */}

				<p className="my-5 w-full text-xs">
					Your email address will not be published. All fields are required.
				</p>

				{/* form body start */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<textarea
								{...register('comment', {
									required: 'Your comments are required.',
								})}
								id="comment"
								rows={5}
								className="form-field"
								placeholder="Comment"
							></textarea>
							{errors.comment && (
								<p className="text-xs text-error">{errors.comment.message}</p>
							)}
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:gap-3">
						<div className="mb-3 flex-1">
							<input
								type="text"
								{...register('name', {
									required: 'Your name is required.',
								})}
								id="name"
								className="form-field"
								placeholder="Name"
							/>
							{errors.name && <p className="text-xs text-error">{errors.name.message}</p>}
						</div>

						<div className="mb-3 flex-1">
							<input
								type="email"
								{...register('email', { required: 'Your email address is required.' })}
								id="email"
								className="form-field"
								placeholder="Email address"
							/>
							{errors.email && (
								<p className="text-xs text-error">{errors.email.message}</p>
							)}
						</div>
					</div>

					<div className="mt-5">
						{/* submit button start */}
						<button
							type="submit"
							className="w-full transform rounded-lg bg-accent px-5 py-2 font-semibold uppercase tracking-wide text-highlight-alt transition-colors duration-300 hover:bg-accent focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-80"
						>
							{isSubmitting ? 'Submitting Comment' : 'Submit Comment'}
						</button>
						{/* submit button end */}
					</div>

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

export default DisplayBlogCommentForm;
