import { GraphQLClient } from 'graphql-request';

import { createComment } from '@/lib/graphql/mutations';

/* api endpoint */
const endpoint = process.env.NEXT_PUBLIC_CONTENT_API_RW;

/* auth token */
const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;

/* recaptcha secret key */
const secretKey = process.env.RECAPTCHA_SECRET_KEY;

export default async function comments(req, res) {
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
			const result = await client.request(createComment, {
				name: req.body.name,
				email: req.body.email,
				comment: req.body.comment,
				slug: req.body.slug,
			});

			return res.status(200).json({
				result: result,
				status: 'success',
				message:
					'Your comment has been received. It will be shared after moderation, with anticipation and positivity.',
			});
		} else {
			/* the result was bogus */
			return res.status(200).json({
				status: 'failure',
				message: 'Your request was not accepted, please try again.',
			});
		}
	} catch (error) {
		/* some other error occured */
		console.error(error);
	}
}
