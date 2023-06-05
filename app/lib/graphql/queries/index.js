import { gql } from 'graphql-request';

/* query all data from the global table */
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
