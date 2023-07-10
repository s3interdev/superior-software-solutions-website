import { GraphQLClient } from 'graphql-request';

import { createReview } from '@/lib/graphql/mutations';

const endpoint = process.env.NEXT_PUBLIC_CONTENT_API_RW;
const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const secretKey = process.env.RECAPTCHA_SECRET_KEY;

export default async function reviews(req, res) {
	/* initialize GraphQL client */
	const client = new GraphQLClient(endpoint, {
		headers: { authorization: `Bearer ${authToken}` },
	});

	try {
		/* create a post request to the google verification servers */
		const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `secret=${secretKey}&response=${req.body.gRecaptchaToken}`,
		});

		const postRequestResult = await response.json();

		console.log('The reCaptcha server response: ', postRequestResult);

		/* the result was good therefore post the result */
		if (postRequestResult.score > 0.5) {
			const result = await client.request(createReview, {
				reviewerBusinessName: req.body.reviewerBusinessName,
				reviewerName: req.body.reviewerName,
				reviewerEmail: req.body.reviewerEmail,
				reviewerPhoneNumber: req.body.reviewerPhoneNumber,
				review: req.body.review,
				reviewRating: req.body.reviewRating,
			});

			return res.status(200).json({
				result: result,
				status: 'success',
				message:
					'Your review has been received. It will be shared after moderation, with anticipation and positivity.',
			});
		} else {
			/* the result was not good */
			return res.status(200).json({
				status: 'failure',
				message:
					'Your review was not accepted, please try again with patience and understanding.',
			});
		}
	} catch (error) {
		/* some other error occured */
		console.error(error);
	}
}
