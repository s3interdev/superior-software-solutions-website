import {
	qryDataGlobal,
	qryDataPageBlogs,
	qryDataSummaryBlogs,
	qryDataPageLegalPolicy,
} from '@/lib/graphql/queries';

/* declare variables */
const endpoint = process.env.NEXT_PUBLIC_CONTENT_API_RO;

/* get global data */
export const getDataGlobal = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataGlobal }),
		next: { revalidate: 21 },
	});

	const { data } = await res.json();

	return data.globals[0];
};

/* get blogs page data */
export const getDataPageBlogs = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataPageBlogs }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.pages[0];
};

/* get the blogs summary data */
export const getDataSummaryBlogs = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataSummaryBlogs }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.posts;
};

/* get legal policy page data */
export const getDataPageLegalPolicy = async (slug) => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataPageLegalPolicy, variables: { slug: slug } }),
		next: { revalidate: 34 },
	});

	const { data } = await res.json();

	return data.pages[0];
};
