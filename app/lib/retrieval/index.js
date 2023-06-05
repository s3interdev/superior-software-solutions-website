import { qryDataGlobal, qryDataPageLegalPolicy } from '../graphql/queries';

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

/* get legal policy page data */
export const getDataPageLegalPolicy = async (slug) => {
	const res = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify({ query: qryDataPageLegalPolicy, variables: { slug: slug } }),
		headers: { 'Content-Type': 'application/json' },
		next: { revalidate: 21 },
	});

	const { data } = await res.json();

	return data.pages[0];
};
