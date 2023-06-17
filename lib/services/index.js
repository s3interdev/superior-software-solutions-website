import {
	qryDataBlogPostCategories,
	qryDataCategorySummaryBlogPosts,
	qryDataGlobal,
	qryDataPageBlogPost,
	qryDataPageBlogPostCategories,
	qryDataPageBlogPosts,
	qryDataPageLegalPolicy,
	qryDataSimilarBlogPosts,
	qryDataSummaryBlogPosts,
} from '@/lib/graphql/queries';

/* declare variables */
const endpoint = process.env.NEXT_PUBLIC_CONTENT_API_RO;

/* get blog post categories */
export const getDataBlogPostCategories = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataBlogPostCategories }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.categories;
};

/* get blog post category summary data */
export const getDataCategorySummaryBlogPosts = async (slug) => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: qryDataCategorySummaryBlogPosts,
			variables: { slug: slug },
		}),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.posts;
};

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

/* get blog post data */
export const getDataPageBlogPost = async (slug) => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataPageBlogPost, variables: { slug: slug } }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.posts[0];
};

/* get blog posts categories page data */
export const getDataPageBlogPostCategories = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataPageBlogPostCategories }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.pages[0];
};

/* get blog posts page data */
export const getDataPageBlogPosts = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataPageBlogPosts }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.pages[0];
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

/* get similar blog post data */
export const getDataSimilarBlogPosts = async (slug, categories) => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: qryDataSimilarBlogPosts,
			variables: { slug: slug, categories: categories },
		}),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.posts;
};

/* get the blog posts summary data */
export const getDataSummaryBlogPosts = async () => {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: qryDataSummaryBlogPosts }),
		next: { revalidate: 13 },
	});

	const { data } = await res.json();

	return data.posts;
};
