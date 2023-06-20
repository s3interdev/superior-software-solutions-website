import { gql } from 'graphql-request';

/* retrieve blog post category data */
export const qryDataBlogPostCategories = gql`
	query qryDataBlogPostCategories {
		categories {
			title
			slug
		}
	}
`;

/* retrieve the blog post category summary data */
export const qryDataCategorySummaryBlogPosts = gql`
	query qryDataCategorySummaryBlogPosts($slug: String!) {
		posts(where: { categories_some: { slug: $slug } }) {
			title
			slug
			image {
				url
			}
			team {
				name
			}
			date
			excerpt
		}
	}
`;

/* retrieve the blog post comments */
export const qryDataCommentsBlogPost = gql`
	query qryDataCommentsBlogPost($slug: String!) {
		comments(where: { post: { slug: $slug } }) {
			name
			comment
			createdAt
		}
	}
`;

/* retrieve global data */
export const qryDataGlobal = gql`
	query qryDataGlobal {
		globals(where: { slug: "superior-software-solutions" }) {
			name
			slug
			logo {
				url
			}
			tagLine
			tagLineSubtitle
			metaDescription
			contacts {
				lists {
					title
					subtitle
				}
			}
			socialMedia {
				lists {
					image {
						url
					}
					title
					subtitle
				}
			}
			navHeader {
				navigation {
					title
					link {
						text
						url
					}
				}
			}
			navFooterInformation {
				navigation {
					title
					link {
						text
						url
					}
				}
			}
			navFooterBusiness {
				navigation {
					title
					link {
						text
						url
					}
				}
			}
			navFooterAction {
				navigation {
					title
					link {
						text
						url
					}
				}
			}
			navFooterLegal {
				navigation {
					title
					link {
						text
						url
					}
				}
			}
		}
	}
`;

/* retrieve blog post page data by passing the appropriate slug */
export const qryDataPageBlogPost = gql`
	query qryDataPageBlogPost($slug: String!) {
		posts(where: { slug: $slug }) {
			title
			slug
			image {
				url
			}
			team {
				name
				image {
					url
				}
				bio {
					html
				}
			}
			categories {
				title
				slug
			}
			date
			excerpt
			content {
				html
			}
			callToAction {
				title
				image {
					url
				}
				content {
					html
				}
				link {
					text
					url
				}
			}
		}
	}
`;

/* retrieve the blog posts categories page data */
export const qryDataPageBlogPostCategories = gql`
	query qryDataPageBlogCategories {
		pages(where: { slug: "blog-categories" }) {
			title
			slug
			metaDescription
			hero {
				callToAction {
					title
					subtitle
				}
			}
			callToAction {
				title
				image {
					url
				}
				content {
					html
				}
				link {
					text
					url
				}
			}
		}
	}
`;

/* retrieve the blog posts page data */
export const qryDataPageBlogPosts = gql`
	query qryDataPageBlogs {
		pages(where: { slug: "blogs" }) {
			title
			slug
			metaDescription
			hero {
				callToAction {
					title
					subtitle
				}
			}
			callToAction {
				title
				image {
					url
				}
				content {
					html
				}
				link {
					text
					url
				}
			}
		}
	}
`;

/* retrieve a legal policy page data by passing the appropriate slug */
export const qryDataPageLegalPolicy = gql`
	query qryDataPageLegalPolicy($slug: String!) {
		pages(where: { slug: $slug }) {
			title
			slug
			metaDescription
			hero {
				callToAction {
					title
					subtitle
				}
			}
			content {
				content {
					title
					content {
						html
					}
				}
			}
		}
	}
`;

/* retrieve blog posts that are similar */
export const qryDataSimilarBlogPosts = gql`
	query qryDataSimilarBlogPosts($slug: String!, $categories: [String!]) {
		posts(
			where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
			last: 3
		) {
			title
			slug
			image {
				url
			}
			date
		}
	}
`;

/* retrieve the blog posts summary data */
export const qryDataSummaryBlogPosts = gql`
	query qryDataSummaryPosts {
		posts {
			title
			slug
			image {
				url
			}
			team {
				name
			}
			date
			excerpt
		}
	}
`;
