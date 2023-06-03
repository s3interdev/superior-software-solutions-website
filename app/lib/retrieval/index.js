import { qryDataGlobal } from '../graphql/queries';

/* declare variables */
const endpoint = process.env.NEXT_PUBLIC_CONTENT_API_RO;

/* get global data */
export const getDataGlobal = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify({ query: qryDataGlobal }),
		headers: { 'Content-Type': 'application/json' },
		next: { revalidate: 21 },
	});

	const { data } = await res.json();

	return data.globals[0];
};
