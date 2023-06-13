import { gql } from 'graphql-request';

/* query the global data */
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

/* query the blogs page data */
export const qryDataPageBlogs = gql`
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

/* query the blogs summary data */
export const qryDataSummaryBlogs = gql`
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

/* query the legal policy page data by passing the appropriate slug */
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
